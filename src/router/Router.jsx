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
import SearchResults from '../pages/home/component/searchresults/SearchResults'
import Payment from '../pages/home/component/payment/Payment'
import Giftbook from '../pages/home/component/giftbook/Giftbook'
import Bag from '../pages/home/component/bag/Bag'
import Notebook from '../pages/home/component/notebook/Notebook'
import Bagadminpanel from '../pages/home/component/bagadminpanel/Bagadminpanel'
import Notebookadminpanel from '../pages/home/component/notebookadminpanel/Notebookadminpanel'
import Giftadminpanel from '../pages/home/component/giftadminpanel/Giftadminpanel'
import Client from '../pages/client/Client'
import Orderguide from '../pages/home/component/orderguide/Orderguide'
import PaymentMethods from '../pages/home/component/paymentmethods/PaymentMethods'
import Delivery from '../pages/home/component/delivery/Delivery'
import Orderstatus from '../pages/home/component/orderstatus/Orderstatus'
import DeliveryReturn from '../pages/home/component/deliveryreturn/DeliveryReturn'
import GiftCards from '../pages/home/component/giftcards/GiftCards'
import Discount from '../pages/home/component/discount/Discount'

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
            <Route path='/search' element={<SearchResults/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/giftbook' element={<Giftbook/>}/>
            <Route path='/bag' element={<Bag/>}/>
            <Route path='/notebook' element={<Notebook/>}/>
            <Route path='/bag adminpanel' element={<Bagadminpanel/>}/>
            <Route path='/notebook adminpanel' element={<Notebookadminpanel/>}/>
            <Route path='/gift adminpanel' element={<Giftadminpanel/>}/>
            <Route path='/onlinechat' element={<Client/>}/>
            <Route path='/orderguide' element={<Orderguide/>}/>
            <Route path='/paymentmethods' element={<PaymentMethods/>}/>
            <Route path='/delivery' element={<Delivery/>}/>
            <Route path='/orderstatus' element={<Orderstatus/>}/>
            <Route path='/deliveryreturn' element={<DeliveryReturn/>}/>
            <Route path='/giftcards' element={<GiftCards/>}/>
            <Route path='/discount' element={<Discount/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router