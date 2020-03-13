import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    // console.log(fakeData);

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <Product products={product}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h1>This is Cart</h1>
            </div>
        </div>
    );
};

export default Shop;