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
import Azekitablar from '../pages/home/component/azekitablar/Azekitablar'
import Turkkitablar from '../pages/home/component/turkkitablar/Turkkitablar'
import Ingiliskitablar from '../pages/home/component/ingiliskitablar/Ingiliskitablar'
import Ruskitablar from '../pages/home/component/ruskitablar/Ruskitablar'
import Turkadminpanel from '../pages/home/component/turkadminpanel/Turkadminpanel'
import Rusadminpanel from '../pages/home/component/rusadminpanel/Rusadminpanel'
import Ingilisadminpanel from '../pages/home/component/ingilisadminpanel/Ingilisadminpanel'

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
            <Route path='/azerbaycan kitablari' element={<Azekitablar/>}/>
            <Route path='/turk kitablari' element={<Turkkitablar/>}/>
            <Route path='/ingilis kitablari' element={<Ingiliskitablar/>}/>
            <Route path='/rus kitablari' element={<Ruskitablar/>}/>
            <Route path='/turk adminpanel' element={<Turkadminpanel/>}/>
            <Route path='/rus adminpanel' element={<Rusadminpanel/>}/>
            <Route path='/ingilis adminpanel' element={<Ingilisadminpanel/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Router