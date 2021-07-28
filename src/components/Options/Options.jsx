import React from 'react'
import { NavLink } from 'react-router-dom';
import  './Options.css'

function Options() {
    return (
        <div className="Navbar">
            <NavLink to="/" className="navOption">Nosotros</NavLink>
            <NavLink to="/" className="navOption">Origenes</NavLink>
            <NavLink to="/" className="navOption">Equipamiento</NavLink>
            <NavLink to="/" className="navOption">Tienda</NavLink>
        </div>
    )
}
export default Options;
