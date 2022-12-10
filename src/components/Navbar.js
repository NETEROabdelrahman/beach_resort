import React, { useState } from 'react'
import {BiAlignRight} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import Home from '../pages/Home'
import Rooms from '../pages/Rooms'



export default function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false)
  //console.log(isOpen)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Beach Resort" />
        </Link>
        <button
          type="button"
          className="nav-btn"
          onClick={handleToggle}
        >
          <BiAlignRight className="nav-icon" />
        </button>
      </div>
      <ul
        className={isOpen ? "nav-links show-nav" : "nav-links"}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
