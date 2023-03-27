import React from 'react';
import './Product.css'

const Product = (Props) => {
    const { img, name, seller, quantity, price, id, ratings } = Props.product;
    console.log(Props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p> Rating:{ratings}star</p>


            </div>
            <button className='button-cart'>Add to card</button>



        </div>
    );
};

export default Product;