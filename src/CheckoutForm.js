import React, { useState, useEffect } from "react";
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import CartItem from './CartItem';
import './checkoutForm.scss'



const CheckoutForm = ({ amount }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads       
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({amount})
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setClientSecret(data.clientSecret);
        });
    }, []);
    // const cardStyle = {
    //     style: {
    //         base: {
    //             color: "#32325d",
    //             fontFamily: 'Arial, sans-serif',
    //             fontSmoothing: "antialiased",
    //             fontSize: "16px",
    //             "::placeholder": {
    //               color: "#32325d"
    //             }
    //         },
    //         invalid: {
    //             color: "#fa755a",
    //             iconColor: "#fa755a"
    //         }
    //     }
    // };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement)
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };
    return (
        <div className="checkout">
            <Row xs="1" lg="2">
                <Col>
                    <form className="payment-form" onSubmit={handleSubmit}>
                        <CardElement id="card-element" onChange={handleChange} />
                        <button
                            disabled={processing || disabled || succeeded}
                            id="submit"
                        >
                            <span id="button-text">
                                {processing ? (
                                <div className="spinner" id="spinner">
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </div>
                                ) : (
                                 "Pay"
                                )}
                            </span>
                        </button>
                        {/* Show any error that happens when processing the payment */}
                        {error && (
                            <div className="card-error" role="alert">
                                {error}
                            </div>
                        )}
                        {/* Show a success message upon completion */}
                        {succeeded && (
                            <div role="alert">
                            Payment succeeded!
                        </div>
                        )}
                        {/* <p className={succeeded ? "result-message" : "result-message hidden"}> */}
                          {/* Payment succeeded, see the result in your
                          <a
                            href={`https://dashboard.stripe.com/test/payments`}
                          >
                            {" "}
                            Stripe dashboard.
                          </a> Refresh the page to pay again. */}
                        {/* </p> */}
                    </form>
                </Col>
                <Col>
                    <h5>Your Cart</h5>
                    <ul className="cart-list">
                        <CartItem 
                        img={"tri-city-forest.jpg"} 
                        title={"Carbon Offset"} 
                        description={"Spruce forest in Massachusetts"}
                        price={amount}/>
                    </ul>
                    <hr></hr>
                    <div className="cart-total">
                        <div>Total</div>
                        <div>${amount}</div>
                    </div>
                </Col>
            </Row>
        </div>
  
    );
}

export default CheckoutForm;