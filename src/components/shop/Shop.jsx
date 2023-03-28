import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    }, []);
    useEffect(() => {

        const storedCart = getShoppingCart();
        const savedCart = [];
        console.log(storedCart)
        // step 1:get id of the addedProduct 
        for (const id in storedCart) {
            // step 2:get the product  from products by using id
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct)
            if (addedProduct) {
                // step3: get quantity of the product 
                const quantity = storedCart[id];
                addedProduct.quantity
                    = quantity;
                // step4: add the addedProduct to the saved cart
                savedCart.push(addedProduct);

            }
            console.log('added product', addedProduct)
        }
        // step5 : set the cart
        setCard(savedCart);
    }, [products])
    const HandelAddToCard = (product) => {
        // cart.push(product);
        let newCard = [];
        // const newCard = [...card, product];
        // if product doesn't exist in the cart, then set  quantity = 1
        // if exist update quantity by 1
        const exists = card.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1
            newCard = [...card, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = card.filter(pd => pd.id !== product.id);
            newCard = [...remaining, exists]
        }
        setCard(newCard)
        addToDb(product.id)

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