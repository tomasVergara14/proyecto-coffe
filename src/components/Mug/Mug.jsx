import React from 'react'
import './Mug.css'
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMugHot} from '@fortawesome/free-solid-svg-icons'


function Mug() {
    return (
        <div>
           <NavLink to="/" ><FontAwesomeIcon icon={faMugHot} className="Mug" /></NavLink>
        </div>
    )
}
export default Mug

