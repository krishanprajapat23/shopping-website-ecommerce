import { useState } from 'react'
import './App.scss'
import Logo from './Assets/images/logo.png'
import menBanner from './Assets/images/banner_mens.png';
import womenBanner from './Assets/images/banner_women.png';
import kidsBanner from './Assets/images/banner_kids.png';
import LoginModal from './Components/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header Logo={Logo}/>
      <LoginModal />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/men' element={<ShopCategory heroBanner={menBanner} category='men'/>} />
        <Route path='/women' element={<ShopCategory heroBanner={womenBanner} category='women'/>} />
        <Route path='/kids' element={<ShopCategory heroBanner={kidsBanner} category='kid'/>} />
        <Route path='/product' element={<Product />}>
        <Route path=':productId' element={<Product />}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>} />
      </Routes>   
      <Footer Logo={Logo}/>
    </BrowserRouter>
    </>
  )
}

export default App
