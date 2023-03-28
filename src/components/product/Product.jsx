import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (Props) => {

    const { img, name, seller, quantity, price, id, ratings } = Props.product;
    const HandelAddToCard = Props.HandelAddToCard






    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p> Rating:{ratings}star</p>


            </div>
            <button onClick={() => HandelAddToCard(Props.product)} className='button-cart'>
                Add to card
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>



        </div>
    );
};

export default Product;