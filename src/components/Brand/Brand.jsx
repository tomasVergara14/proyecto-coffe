import React from 'react'
import './Brand.css'
import Mug from '../Mug/Mug'
import CartWidget from '../CartWidget/CartWidget';


function Brand() {
    return (
        <div className="Brand">
            <h1 className="BrandName">Latte Latte</h1> 
            <Mug/>
        </div>
    )
}
export default Brand
