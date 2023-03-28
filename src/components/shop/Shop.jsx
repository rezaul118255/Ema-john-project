import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setproducts] = useState([])
    const [card, setcard] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    const HandelAddToCard = (product) => {
        const newcard = [...card, product];
        setcard(newcard)

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
            <div className="cart-container">
                <h5>order summary <summary></summary></h5>
                <p>total added:{card.length}</p>
            </div>

        </div>
    );
};

export default Shop;