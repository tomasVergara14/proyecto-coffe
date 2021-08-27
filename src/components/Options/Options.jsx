import React from 'react'
import { NavLink } from 'react-router-dom';
import  './Options.css'

function Options() {
    return (
        <div className="Navbar">
            <NavLink to="/us" className="navOption">Nosotros</NavLink>
            <NavLink to="/contact" className="navOption">Contactanos</NavLink>
        </div>
    )
}
export default Options;
