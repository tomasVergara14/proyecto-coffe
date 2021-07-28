import React from 'react'
import './Brand.css'
import { NavLink } from 'react-router-dom';
import Mug from '../Mug/Mug'
import CartWidget from '../CartWidget/CartWidget';


function Brand() {
    return (
        <div className="Brand">
            < NavLink to="/" ><h1 className="BrandName" > Latte Latte</h1>  </NavLink> 
            <Mug/>
        </div>
    )
}
export default Brand
