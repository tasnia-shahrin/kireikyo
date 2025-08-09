import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Kireikyo</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("j-beauty")}}><Link style={{textDecoration: 'none'}} to='/j-beauty'>J-Beauty</Link>{menu==="j-beauty"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("k-beauty")}}><Link style={{textDecoration: 'none'}} to='/k-beauty'>K-Beauty</Link>{menu==="k-beauty"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("hot deals")}}><Link style={{textDecoration: 'none'}} to='/hot deals'>Hot Deals</Link>{menu==="hot deals"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
export default Navbar
