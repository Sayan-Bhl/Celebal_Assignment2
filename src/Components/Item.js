import React, { useContext } from 'react'
import ItemContext from '../Context/ItemContext'
import './Item.css'
const Item = (props) => {
  const { item } = props
  const contextItem = useContext(ItemContext)
  const { cartProducts } = contextItem;
  const handleClick = (e) => {
    e.preventDefault();
    cartProducts(item)

  }
  return (
    <div>
      <div className="card main" >
        <img src={item.image} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title.slice(0, 40)}...</h5>
          <p className="card-text">{item.description.slice(0, 40)}...</p>
          <p className="card-text"><b>Price:</b> ${item.price}</p>
          <a href="/" className="btn btn-primary" onClick={handleClick}>Add to cart</a>
        </div>
      </div>
    </div>
  )
}

export default Item
