import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cart_icon from '../Assets/images/cart_icon.png'
function Header({Logo}) {
const [menu, setMenu] = useState('home');

  return (
   <header>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <button className="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse order-2 order-lg-1" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link onClick={()=> setMenu('home')} className={menu === 'home' ? "nav-link active" : "nav-link" } to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={()=> setMenu('men')} className={menu === 'men' ? "nav-link active" : "nav-link"} to='/men'>Men</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={()=> setMenu('women')} className={menu === 'women' ? "nav-link active" : "nav-link"} to='/women'>Women</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={()=> setMenu('kids')} className={menu === 'kids' ? "nav-link active" : "nav-link"} to='/kids'>Kids</Link>
                    </li>
                </ul>
                </div>
                <div className="nav-login-cart d-flex gap-2 align-items-center order-1 order-lg-2">
                    <button type='button' className='btn theme-btn' data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                    <div className="cart-wrap position-relative">
                        <Link to='/cart'>
                            <img src={cart_icon} alt="" width='30'/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                            <span className="visually-hidden">unread messages</span>                        
                            </span>
                        </Link>
                    </div>
                </div>
        </div>
    </nav>   
   </header>
  )
}

export default Header