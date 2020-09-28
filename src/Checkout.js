import React from 'react'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");


const Checkout = (props) => {
    return (
        <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={props.location.state}/>
        </Elements>
        </div>
    )
}

export default Checkout;