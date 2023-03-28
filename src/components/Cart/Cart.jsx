import React from 'react';
import('./cart.css')

const Cart = ({ card }) => {
    // const card = Props.card
    // console.log(card)
    // const { card } = Props;
    let totalPrice = 0;
    let totalPriceShipping = 0;
    for (const product of card) {

        totalPrice = totalPrice + product.price;
        totalPriceShipping = totalPriceShipping + product.shipping;

    }

    let tax = totalPrice * 7 / 100;
    let grandTotalPrice = totalPrice + tax + totalPriceShipping
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>totalPrice added:{card.length}</p>
            <p>totalPrice Price :${totalPrice}</p>

            <p>totalPrice shipping: ${totalPriceShipping}</p>
            <p>tax:${tax.toFixed(2)}</p>
            <h4>grand totalPrice:${grandTotalPrice.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;