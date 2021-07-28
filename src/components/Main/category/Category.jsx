import React, {useState, useEffect} from 'react'
import './Category.css'
import { NavLink } from 'react-router-dom'
import categoriesData from '../../../data/Categories'



const Category = () => {
    
    const [category, setCategory]=useState([])
    const data = categoriesData

    function handlerPromise(){
        setTimeout(()=>{
            Promise.resolve(data)
            .then(response =>setCategory(response) )
        }, 0)
    }
    
    useEffect(()=>{
        handlerPromise()
    },[])
    
    return (
        <div className="item">
            {category.map((categories)=>{
                const {id, category, url, img, alt}= categories
                return (
                    <div key={id} className="itemBox" > 
                        <NavLink to={url} className="category" > <img src={(img)} alt={alt} className="img" /> <p className="product" >{category} </p>  </NavLink>
                    </div>
                )
            } )}
        </div>
    )
}

export default Category
