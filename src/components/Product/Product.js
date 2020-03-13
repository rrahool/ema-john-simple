import React from 'react';

const Product = (props) => {
    // console.log(props.products.name);
    
    return (
        <div>
            <h3>This is Product</h3>
            <h4>{props.products.name}</h4>
        </div>
    );
};

export default Product;