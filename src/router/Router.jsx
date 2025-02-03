import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Notfound from '../pages/notfound/Notfound'
import Basket from '../pages/basket/Basket'
import Wishlist from '../pages/wishlist/Wishlist'
import SignupForm from '../pages/signup/SignupForm'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/*' element={<Notfound/>}/>
            <Route path='/login' element={<SignupForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router