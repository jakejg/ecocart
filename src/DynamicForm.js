import React, { Component } from 'react'
import './DynamicForm.scss'

import { CarbonData } from './CarbonData'
import CheckoutForm from './CheckoutForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { CSSTransition } from 'react-transition-group'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Redirect } from 'react-router-dom'

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export class DynamicForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0,
            path: [0],
            pathAbs: null,
            selectedAnswers: [],
            carbonScores: [],
            currAnswer: [],
            options: [],
            disabled: true,
            isAtSummary: false,
            checkoutModalShow: false,
            payableAmount: 10,
            productName: "Test",
            clickedCheckoutConfirm: false,
            connectionError: false,
            slideAnimation: true,
            showCheckout: false,
            answerSelected: false,
            subScores: []
        }
    }

    nextQuestionHandler = () => {
        var { selectedAnswers, carbonScores, options, currAnswer, path, subScores } = this.state
        this.setState({
            slideAnimation: false
        })
        function wait(){
            console.log('nextQuestionHandler / currAnswer:', currAnswer);

            // computing score for this question
            let score = 0;
            for (let i = 0; i < currAnswer.length; i++) {
                let thisAnswer = currAnswer[i];
                let thisAnswerScore = options[i].score;
                if (thisAnswer && thisAnswerScore) {
                     
                    if (typeof (thisAnswerScore) === 'string') {
                        // if selected answer is a custom input replace
                        if (thisAnswerScore.includes('value')) {
                            thisAnswerScore = thisAnswerScore.replace('value', thisAnswer);
                        }
                        
                        // if this score needs a previous subscore
                        if (thisAnswerScore.includes('prevSubScore')){
                            thisAnswerScore = thisAnswerScore.replace('prevSubScore', subScores[subScores.length - 1]);
                        }
                    }
                    score += eval(thisAnswerScore);
                }
            }
            // if score is a subscore add it to subscore and add a placeholder 0 to carbonScores
            // otherwise add it to carbonScores and add placeholder to subScores
            let isSubScore = CarbonData[path[path.length - 1]].isSubScore;
            if (isSubScore) {
                subScores.push(score);
                carbonScores.push(0);
            }
            else {
                carbonScores.push(score);
                subScores.push(0);
            }

            console.log("subscores", subScores)
            console.log('Score', carbonScores)
         
            selectedAnswers.push(currAnswer)  // commits currently selected answer
            console.log('Selected answers', selectedAnswers)
            currAnswer = []  // resets currently selected answer
            path.push(path[path.length - 1] + 1)  // moves to next question
            console.log('Path', path)

            if (path[path.length - 1] < CarbonData.length) {
                const questionObject = CarbonData[path[path.length - 1]]
                var { condition } = questionObject
                if (condition != null) {
                    condition = condition.replace('prevSelections', `'${selectedAnswers[selectedAnswers.length - 1]}'.split(',')`)
                    console.log('Question\'s gating condition', condition)  // [revisit] remove
                    var result = eval(condition)
                    if (typeof (result) == 'boolean')
                        if (!result) {
                            if (path[path.length - 1] + 1 < CarbonData.length) path.push(path.pop() + 1)
                            else this.handleSubmit()
                        }
                }
            } else {  // if next question is out of bounds
                this.handleSubmit()
                return
            }

                this.setState({
                    path,
                    pathAbs: path.join(' '),
                    currAnswer,
                    carbonScores,
                    disabled: true,
                    slideAnimation: true,
                    answerSelected: false
                })
            }
        // wait for exit transition to finish, before setting state to start entrance transition
        setTimeout(wait.bind(this), 1700)

        // set next button to disabled right away to prevent skipping a question.
        this.setState({
                    disabled: true,
                    answerSelected: true
                })    
    }

    prevQuestionHandler = () => {
        var { selectedAnswers, carbonScores, currAnswer, path, subScores } = this.state

        currAnswer = selectedAnswers.pop()  // moves back to previous question's answer in stack
        carbonScores.pop()  // moves score to previous state
        subScores.pop() // moves subScore to previous state
        path.pop()  // moves to previous question

        this.setState({
            path,
            pathAbs: path.join(' '),
            currAnswer,
            carbonScores,
            disabled: false
        })
    }

    componentDidMount() {
        const { path } = this.state;
        this.setState(() => {
            return {
                question: CarbonData[path[path.length - 1]].question,
                options: CarbonData[path[path.length - 1]].options,
            }
        }
        )
        document.addEventListener("keydown", (event) => {
            if (event.keyCode == 13 && this.state.currAnswer.length != 0) this.nextQuestionHandler()
        })
    }

    // function to only allows users to type positive whole numbers greater than 0
    validateInput = (input) => {
        input = input.replace(/[^0-9]/, '');
        // don't allow a zero to be typed first
        if (input.startsWith('0')) {
            input = input.slice(1);
        }
        return input;
    }

    // function to only allows users to type valid monetary amounts
    validateMoneyInput(input){
        input = input.replace(/[^0-9.]/, '');

        // don't allow a user to type more than 2 characers after "."
        if (input[input.length - 4] === ".") {
            input = input.slice(0, input.length - 1);
        }
        return input;
    }

    handleTyping = (e) => {
        let { value } = e.target;
        value = this.validateMoneyInput(value);
        this.setState({
            payableAmount: value
        })
    }

    checkAnswer = (answerIndex, answer, callback, isTypedInput) => {
        var { currAnswer, options, path } = this.state
        var multiple = path[path.length - 1] < CarbonData.length ? CarbonData[path[path.length - 1]].multiple : false
        if (multiple) {
            if (answer == currAnswer[answerIndex]) currAnswer[answerIndex] = null
            else currAnswer[answerIndex] = answer
        } else {
            currAnswer = Array.from(Array(options.length), () => null)
            currAnswer[answerIndex] = answer
        }
        console.log('Curr answer', currAnswer)

        // only allow users to type positive numbers
        if (isTypedInput){
            currAnswer[answerIndex] = this.validateInput(currAnswer[answerIndex]);
        }
        this.setState({
            currAnswer,
            disabled: currAnswer.toString().length == currAnswer.length - 1
        }, () => {
            callback();
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { path, pathAbs } = this.state;
        if (pathAbs != prevState.pathAbs) {
            this.setState(() => {
                return {
                    question: CarbonData[path[path.length - 1]].question,
                    options: CarbonData[path[path.length - 1]].options
                }
            });
        }
    }

    handleSubmit = () => {
        this.setState({
            currAnswer: [],
            isAtSummary: true,
            disabled: true
        })
        // this.props.handleSubmit()
    }

    overToStripe = async () => {
        this.setState({ clickedCheckoutConfirm: true });
        const stripe = await stripePromise;
        const response = await fetch("https://ecocart-stripe-server.herokuapp.com/create-session", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productName: this.state.productName, payableAmount: this.state.payableAmount })
        });
        if (response.error) {
            this.setState({ clickedCheckoutConfirm: false, connectionError: true });
            return;
        }
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            this.setState({ clickedCheckoutConfirm: false, connectionError: true })
        }
    }


    handleNext = () => {
        
        if (this.state.isAtSummary){
            // get selected amount to pay
            let amount = this.state.currAnswer.find(val => val !== null)
            if (amount.startsWith('$')){
                amount = amount.substring(1);
            }
            this.setState({
                payableAmount: amount,
                showCheckout: true
            })
        }
        else {
            this.nextQuestionHandler();
        }
        
    }

    render() {
        var { question, options, path, currAnswer, disabled, isAtSummary, carbonScores } = this.state
        currAnswer = currAnswer.length == 0 ? Array.from(Array(options.length), () => null) : currAnswer
        const questionObj = CarbonData[path[path.length - 1]]

        // if this render is actually the summary
        var emissions, trees, homes
        if (isAtSummary) {
            var totalScore = 0
            console.log(carbonScores)
            for (let score of carbonScores) totalScore += score
            options = [
                {
                    "type": "text",
                    "value": '$' + (totalScore * 10.6).toFixed(2),
                    "aside": "Offset my emissions last year"
                },
                {
                    "type": "text",
                    "value": '$' + (totalScore * 0.9 * 3).toFixed(2),
                    "aside": "Offset my emissions last 3 months"
                },
                {
                    "type": "text",
                    "value": '$' + (totalScore * 0.9).toFixed(2),
                    "aside": "Offset my emissions last month"
                },
                {
                    "type": "input",
                    "value": "Offset what you want",
                    "aside": "Offset my emissions"
                }
            ]
            emissions = Math.round(totalScore * 2205).toLocaleString()
            trees = Math.round(totalScore * 4.41).toLocaleString()
            homes = Math.round(totalScore * 0.4).toLocaleString()
        }
        if (this.state.showCheckout){
            console.log(this.state.payableAmount)
            return <Redirect to={{
                pathname: "/checkout",
                state: this.state.payableAmount
              }}/>
        }
        return (
            <>
            {!isAtSummary &&
                    <div className="progress-container">
                        <div className="progress-text">{
                            `${(disabled ? path[path.length - 1] : path[path.length - 1] + 1)} of ${CarbonData.length} answered`
                        }</div>
                        <ProgressBar now={(disabled ? path[path.length - 1] : path[path.length - 1] + 1) / CarbonData.length * 100} />
                    </div>
            }
            <div className="form">
            
                <CSSTransition 
                 in={this.state.slideAnimation}
                 classNames="question"
                 timeout={1700}
                 appear
                 >
                <div>
                {!isAtSummary
                    ? <>
                        <Row>
                            <Col md="4">
                                <img className="question-image" src={require(`./assets/images/${questionObj.icon}.png`)}></img>
                            </Col>
                            <Col md="8" className={'flex-center'}>
                                <div className="header">{question}</div> 
                                {questionObj.multiple &&
                                    <div className="text-left nudge-down subheader">Select multiple.</div>
                                }
                            {questionObj.subtext &&
                                    <div className="subtext">{questionObj.subtext}</div>}
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col>
                            
                            </Col>
                        </Row> */}
                    </>
                    : <div>
                        <div className="subheader summary-header">Your annual carbon emissions are:</div>
                        <div className={'stats-container nudge-down'}>
                            <div className="stat-container">
                                <img className={'stat-image'} src={require(`./assets/images/co2.png`)}></img>
                                <div className={'stat-value'}>{emissions}</div>
                                <div>lbs of CO2</div>
                            </div>
                            <div className="stat-separator">
                                =
                        </div>
                            <div className="stat-container nudge-right">
                                <img className={'stat-image'} src={require(`./assets/images/tree_icon.png`)}></img>
                                <div className={'stat-value'}>{trees}</div>
                                <div>trees cut down</div>
                            </div>
                            <div className="stat-separator">
                                OR
                        </div>
                            <div className="stat-container nudge-right">
                                <img className={'stat-image'} src={require(`./assets/images/home.png`)}></img>
                                <div className={'stat-value'}>{homes}</div>
                                <div>homes powered</div>
                            </div>
                        </div>
                        <div className={'summary-tagline'}>
                            <b>Join the fight against Climate Change by offsetting your carbon footprint</b>
                               <OverlayTrigger
                                    key={'top'}
                                    trigger={['hover', 'focus']}
                                    placement={'top'}
                                    delay={{show: 0, hide: 2000}}
                                    overlay={
                                        <Tooltip id={'tooltip-top'} className={'tooltip-top'}>
                                            Offset your carbon footprint by helping protect the <a className={'boldface-link'} href="https://ecocart.io/project/forest-protection/" target="_blank">Tri-City Forest</a>
                                        </Tooltip>
                                    }
                                    >
                                    <FontAwesomeIcon className={'nudge-right icon'} icon={faQuestionCircle}/>
                                </OverlayTrigger>
                        </div>
                    </div>
                }
                <div className={'nudge-down-l'}>
                    {options.length != 1
                        ? Object.keys(options).map(answerIndex =>
                            <Card key={`${path[path.length - 1]}${answerIndex}`} className={`nudge-down options ${currAnswer[answerIndex] != null ? "options-selected" : ''} ${isAtSummary ? "options-stats" : ''}`}
                                onClick={(event) => {
                                   
                                    if (this.state.isAtSummary && options[answerIndex].type !== 'input') {
                                        this.checkAnswer(answerIndex, options[answerIndex].type == 'input' && currAnswer[answerIndex] == null ? '' : options[answerIndex].type == 'input' ? currAnswer[answerIndex] : options[answerIndex].value, () => {});
                                        this.setState({ payableAmount: options[answerIndex].value.substring(1), productName: options[answerIndex].aside});
                                    return;
                                    }
                                    this.checkAnswer(answerIndex, options[answerIndex].type == 'input' && currAnswer[answerIndex] == null ? '' : options[answerIndex].type == 'input' ? currAnswer[answerIndex] : options[answerIndex].value, () => {
                                        if (options[answerIndex].type != 'input' && !questionObj.multiple && !this.state.answerSelected) this.nextQuestionHandler();
                                    });
                                }} body>
                                <Row>
                                    <Col className={options[answerIndex].aside ? 'b' : `main-text`}>
                                        <span className="text">{options[answerIndex].value}</span>
                                    </Col>
                                    {options[answerIndex].aside &&
                                    <Col className={'text-right b'}>
                                        {options[answerIndex].type == 'input' && currAnswer[answerIndex] != null &&
                                            <>
                                            {this.state.isAtSummary && <span className='money-label'>$</span>}
                                            <input id='custom-input' onClick={(event) => event.stopPropagation()} onChange={(event) => this.checkAnswer(answerIndex, event.target.value, () => { }, event.target)} autoFocus className={'option-input'} value={currAnswer[answerIndex]}></input>
                                            </>
                                        }
                                        <span className={'option-aside'}>{options[answerIndex].aside}</span>
                                    </Col>
                                    }
                                </Row>
                            </Card>
                        )
                        : <div>
                            <input onChange={(event) => this.checkAnswer(0, event.target.value, () => { }, event.target)} value={this.state.currAnswer[0]} placeholder={options[0].value} autoFocus className={'option-input-only'}></input>
                            <span className={'option-aside'}>{options[0].aside}</span>
                        </div>
                    }
                </div>
                    <Row className={'nudge-down-l click-row'}>
                        {!isAtSummary &&
                        <Col className={'button-col'}>
                            {path.length > 1 &&
                                <Button className={'back-button'}onClick={this.prevQuestionHandler} variant="success">
                                    <span className={'button-text'}>
                                    <FontAwesomeIcon className='left-arrow' icon={faLongArrowAltLeft} />
                                    BACK
                                    </span>
                                </Button>
                            }
                        </Col>}
                        <Col className={'button-col'}>
                            <Button className={'next-button'} disabled={this.state.disabled} onClick={this.handleNext} variant="success">
                                <span className={'button-text'}>{isAtSummary ? "Offset my carbon footprint" : "NEXT"}
                                <FontAwesomeIcon className='right-arrow' icon={faLongArrowAltRight} />
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </div>
                </CSSTransition>
                {/* <Modal show={this.state.checkoutModalShow} onHide={() => this.setState({ checkoutModalShow: false })} size={'lg'} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Awesome! Would you like to confirm payment?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>To: <span className="">{this.state.productName}</span></div>
                        <div>Amount = <span className="subheader">$
                            {this.state.productName === 'Offset my emissions' ?
                               <input value={this.state.payableAmount} onChange={this.handleTyping} type='text' autoFocus/> :
                                this.state.payableAmount }
                            </span></div>
                            {this.state.showCheckout &&
                            <Elements stripe={stripePromise}>
                                <CheckoutForm item={{name: this.state.productName, amount: this.state.payableAmount}}/>
                            </Elements>}
                    </Modal.Body>
                    <Modal.Footer>
                        {this.state.connectionError &&
                            <div className="error-text">Oops! That errored out. Please click again.</div>
                        }
                        <Button className={'action-button'} disabled={this.state.clickedCheckoutConfirm} variant="success" onClick={this.handleConfirmPayment}>
                            CONFIRM
                            {!this.state.clickedCheckoutConfirm &&
                                <FontAwesomeIcon className={'nudge-right-l'} icon={faLongArrowAltRight} />
                            }
                            {this.state.clickedCheckoutConfirm &&
                                <Spinner className={'nudge-right'} animation="border" variant="light" />
                            }
                        </Button>
                        {/* <Button variant="secondary" onClick={() => this.setState({ checkoutModalShow: false })}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.setState({ checkoutModalShow: false })}>
                            Save Changes
                        </Button> */
                    /* </Modal.Footer>
                </Modal> */}


            </div>
        </>
        )
    }
}

export default DynamicForm
