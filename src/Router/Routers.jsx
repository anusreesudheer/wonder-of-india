import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import Travelplan from './../Pages/Travelplan';
import TravelDetail from './../Pages/TravelDetail';
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/travelplan' element={<Travelplan/>}/>
        <Route path='/travelDetail' element={<TravelDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

    </Routes>
  )
}

export default Routers