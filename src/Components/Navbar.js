import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import ItemContext from '../Context/ItemContext'

const Navbar = () => {


  const contextItem = useContext(ItemContext)
  const { count } = contextItem;
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid mx-4">
          <Link className="navbar-brand" to="/">
            <h4>Eshopy</h4>
          </Link>
          <Link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
            <span className="position-absolute top--2 start-30 translate-middle badge rounded-pill bg-danger">
              {count}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
