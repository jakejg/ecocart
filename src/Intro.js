import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import './Intro.scss'

import Button from 'react-bootstrap/Button'

export class Intro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            navigateToForm: null
        }
    }

    handleClick = () => {
        // reset any saved values from previous submissions
        sessionStorage.removeItem('totalScore');
        sessionStorage.removeItem('currAnswer');
        sessionStorage.removeItem('isAtSummary');
        this.setState({ navigateToForm: true })
    }

    render() {

        if (this.state.navigateToForm)
            return <Redirect to="/form" push={true} />

        return (
            <div class="intro">
                <div class="header">Calculate your carbon footprint</div>
                <div class="subheader nudge-down">Find your environmental impact in less than 5 minutes</div>
                <Button className={'button-start'} onClick={this.handleClick} variant="success">Get Started</Button>{''}
            </div>
        )
    }
}

export default Intro
