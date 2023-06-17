import React, { useState } from 'react'
import ItemContext from './ItemContext'
const ItemState = (props) => {
    const host = `https://fakestoreapi.com`
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [count, setCount] = useState(0);
    const allProducts = async () => {
        const fetchres = await fetch(`${host}/products`);
        const parseData = await fetchres.json();
        setItems(parseData);

    }
    const cartProducts = async (cartItem) => {
        setCartItems(cartItems.concat(cartItem));
        setTotalPrice(totalPrice + cartItem.price);
        setCount(count + 1);
    }
    const remove = async (cartItem) => {
        console.log(cartItem)
        setTotalPrice(totalPrice - cartItem.price);
        setCount(count - 1);
        const updatedItems = cartItems.filter((item) => { return item.id !== cartItem.id })
        setCartItems(updatedItems)
    }
    return (
        <ItemContext.Provider value={{ items, cartItems, allProducts, cartProducts, totalPrice, count, remove }}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState
