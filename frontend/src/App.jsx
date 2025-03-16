import React,{ useState,useEffect } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Register from "./pages/Register/Register"
import Login from "./pages/login/login"
import Home from "./pages/Home/Home"
import Cart from "./pages/cart/Cart"
import { useSelector } from 'react-redux';



function App() {
  const token = useSelector((state) => state.token);  
  return (
    <>
     <ToastContainer /> 
    <div id="main">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {token ? <Route path='/home' element={<Home/>}/> : <Route path='/home' element={<Login/>}/>}
        
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
