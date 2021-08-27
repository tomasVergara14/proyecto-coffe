import React from 'react'
import { NavLink } from 'react-router-dom';
import  './Options.css'

function Options() {
    return (
        <div className="Navbar">
            <NavLink to="/" className="navOption">Nosotros</NavLink>
            <NavLink to="/" className="navOption">Encargos</NavLink>
        </div>
    )
}
export default Options;
