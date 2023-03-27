import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className='shopContainer'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}

                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <h5>order summary <summary></summary></h5>
            </div>

        </div>
    );
};

export default Shop;