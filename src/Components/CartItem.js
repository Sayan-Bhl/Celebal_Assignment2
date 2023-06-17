import React from 'react'
import './CartItem.css'
const CartItem = (props) => {
    const { cartItem, remove } = props;
    const handleClick = (e) => {
        e.preventDefault();
        remove(cartItem);
    }
    return (
        <div>
            <div className="card mb-3 main-cart" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cartItem.image} className="img-fluid rounded-start img-cart" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{cartItem.title}</h5>
                            <p className="card-text">{cartItem.description}</p>
                            <p className="card-text"><b>Price:</b> ${cartItem.price}</p>
                            <a href='#' className="btn btn-primary" onClick={handleClick}>Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
