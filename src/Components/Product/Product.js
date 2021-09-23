import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><b>Price: ${price}</b></p>
                <p>only {stock} piece remains,Buy now</p>
                <button onClick={() => props.handleAddToCart(props.product)}>
                    <b>add to cart</b></button>
            </div>
        </div>
    );
};

export default Product;