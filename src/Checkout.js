import React from 'react'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");


const Checkout = (props) => {
    let amount = props.location.state;
    if (!amount){
        amount = JSON.parse(localStorage.getItem('amount'));
    }
    else{ 
        localStorage.setItem('amount', JSON.stringify(props.location.state));
    }
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount}/>
        </Elements>
    )
}

export default Checkout;