import React , { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from "react-router-dom"
import logo from '../../images/logo.svg'
import './Heders.css'



class Heder extends Component {
    render() {
        return (
                <nav className="Nav">
                    <NavLink className="Link" to='/'>
                        <img className="Logo" src={logo} alt='' />
                    </NavLink>

                    <FaBars className="Bars"/>

                    <div className="NavMenu">
                        <NavLink className="Link" to='/'> Главное </NavLink>
                        <NavLink className="Link" to='/about'> О нас </NavLink>
                        <NavLink className="Link" to='/contact'> Контакты </NavLink>
                    </div>
                </nav>
        )
    }
}

export default Heder