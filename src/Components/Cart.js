import React, { useContext } from 'react'
import ItemContext from '../Context/ItemContext'
import CartItem from './CartItem';
import './Cart.css'
const Cart = () => {
  const contextItem = useContext(ItemContext)
  const { cartItems, totalPrice, remove } = contextItem;
  console.log(cartItems);
  return (
    <div>
      <div className="container my-3">
        <div className='amount'>
          <h4>Total Amount: ${totalPrice}</h4>
        </div>
        <div className="row">
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} remove={remove} />
          })}

        </div>
      </div>
    </div>
  )
}

export default Cart
