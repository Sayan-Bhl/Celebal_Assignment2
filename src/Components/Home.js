import React, { useContext, useState, useEffect } from 'react'
import Item from './Item'
import ItemContext from '../Context/ItemContext'
const Home = () => {
  const contextItem = useContext(ItemContext)
  const { items, allProducts } = contextItem;
  useEffect(() => {
    allProducts();
  }, [])
  return (
    <div>
      <div className="container my-3">

        <div className="row">
          {items.map((item) => {
            return <div key={item.id} className="col-md-3"><Item item={item} /></div>
          })}

        </div>
      </div>
    </div>
  )
}

export default Home
