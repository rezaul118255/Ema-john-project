import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const HandelAddToCard = (product) => {
        const newCard = [...card, product];
        setCard(newCard)

    }
    return (
        <div className='shopContainer'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        HandelAddToCard={HandelAddToCard}



                    ></Product>)
                }

            </div>
            <div className="cart-container" >
                <Cart card={card}></Cart>

            </div>

        </div>
    );
};

export default Shop;