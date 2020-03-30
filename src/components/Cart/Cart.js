import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);

    /* We can use reduce or for loop to retrieve the total price of products added to the cart*/
    /* USING reduce*/
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    // console.log(totalPrice);

    /**USING for loop */
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;

    }

    // shipping cost pending

    const tax = (total / 10).toFixed(2);

    const grandTotal = (total + Number(tax)).toFixed(2);


    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;