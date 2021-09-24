import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Items order:{props.cart.length} </h5>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Order total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;