import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import Travel from './../Pages/Travel'
import Travelplan from './../Pages/Travelplan';
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import { Thankyou } from '../Pages/Thankyou';
//import Travel from './../Pages/Travel'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Travel' element={<Travel/>} />
        <Route path='/travel/:id' element={<Travelplan/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>

    </Routes>
  )
}

export default Routers