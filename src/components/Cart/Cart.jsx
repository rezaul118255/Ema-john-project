import React from 'react';
import('./cart.css')

const Cart = ({ card }) => {
    // const card = Props.card
    // console.log(card)
    // const { card } = Props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of card) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // or
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }

    let tax = totalPrice * 7 / 100;
    let grandTotalPrice = totalPrice + tax + totalShipping
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>totalPrice Price :${totalPrice}</p>

            <p>shipping: ${totalShipping}</p>
            <p>tax:${tax.toFixed(2)}</p>
            <h4>grand totalPrice:${grandTotalPrice.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;