import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cartItem.scss';
const CartItem = ({img, title, description, price}) => {

    return (
        <div className="cart-item">
            <div className="img-col">
                <div className="img-container" >
                    <img className="cart-img" src={require(`./assets/images/${img}`)} />
                </div>
            </div>
            <div className="list-col">
                <ul className="item-list">
                    <li><b>{title}</b></li>
                    <li className="item-description">{description}</li>
                    <li>${price}</li>
                </ul>
            </div>
        </div>
    )
}

export default CartItem;
