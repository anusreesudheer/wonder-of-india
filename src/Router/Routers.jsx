import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import Travel from './../Pages/Travel'
import Travelplan from './../Pages/Travelplan';
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import { Thankyou } from '../Pages/Thankyou';
import Profile from '../Pages/Profile';
import About from '../Pages/About';
import Admin from '../Components/Admin/Admin';
import Update from '../Components/Admin/Update';
import Getalltours from '../Components/Admin/Getalltours';
import Delete from '../Components/Admin/Delete'
import MyBookings from '../Shared/MyBookings';

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
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/MyBookings' element={<MyBookings/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/getalltours' element={<Getalltours/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        
    </Routes>
  )
}

export default Routers