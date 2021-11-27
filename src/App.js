import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './comp/Navbar/Navbars'
import  Home  from './layout/home'
import  About  from './layout/about'
import  Contact  from './layout/contact'
import Futer from './comp/Futer/Futers'


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Futer/>
        </BrowserRouter>
    )
}

export default App
