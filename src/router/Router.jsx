import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Notfound from '../pages/notfound/Notfound'
import Basket from '../pages/basket/Basket'
import Wishlist from '../pages/wishlist/Wishlist'
import Aboutbookcenter from '../pages/home/component/aboutbookcenter/Aboutbookcenter'
import Adminpanel from '../pages/home/component/adminpanel/Adminpanel'
import Login from '../pages/login/Login'
import Signup from '../pages/home/component/signup/Signup'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/*' element={<Notfound/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/about' element={<Aboutbookcenter/>}/>
            <Route path='/adminpanel' element={<Adminpanel/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router