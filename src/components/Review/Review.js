import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);


    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        console.log('remove clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    
    useEffect( () => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, []);
    
    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map( 
                        pd => <ReviewItem 
                                            key = {pd.key}
                                            removeProduct = {removeProduct}
                                            product={pd}>
                                    </ReviewItem>)
                }
                <br/>
                <p style={{textAlign: "center"}}>
                    {thankyou}
                </p> 
            </div>
            <div className="cart-contianer">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>            
        </div>
    );git
};

export default Review;