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
import { BASE_URL } from './config';



const CheckoutForm = ({ amount }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const [iframeIsLoaded, setIframeIsLoaded ] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    // create script for hubspot form
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);


    script.addEventListener('load', () => {
        setIframeIsLoaded(true);
        })

    useEffect(() => {
        if(iframeIsLoaded) {
            window.hbspt.forms.create({
              portalId: '7682224',
              formId: '03ab0a2d-5a0f-4cae-a2f5-aaa26a9f068e',
              target: '#hubspotForm'
          })
      }
    }, [iframeIsLoaded]);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads       
        fetch(`${BASE_URL}/create-payment-intent`, {
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
                                ) : 
                                "Pay"
                                }
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
                        description={"Your donation will help protect a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year. This project also protects the habitat of a variety of threatened mammals, birds, and reptiles."}
                        price={amount}/>
                    </ul>
                    <hr></hr>
                    <div className="cart-total">
                        <div>Total</div>
                        <div>${amount}</div>
                    </div>
                    <div id="hubspotForm" class='hubspotForm'></div>
                </Col>
            </Row>
        </div>
  
    );
}

export default CheckoutForm;