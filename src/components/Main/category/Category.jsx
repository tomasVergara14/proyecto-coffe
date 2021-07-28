import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import { NavLink } from 'react-router-dom'
import categoriesData from '../../../data/Categories'



const Category = () => {
    
    const [category, setCategory]=useState([])
    const data = categoriesData
    const {id} = useParams()
    
    useEffect(()=>{
        setTimeout(()=>{
            Promise.resolve(data)
            .then(res =>{
                if(id === undefined){
                    setCategory(res)
                }
                else{
                    setCategory(res.filter(it=> it.id === id))
                }
            } ) 
        }, 0)
    
},[id])
    
    return (
        <div className="item">
            {category.map((categories)=>{
                const {id, category, url, img, alt}= categories
                return (
                    <div key={id} className="itemBox" > 
                        <NavLink to={`${url}${categories.id}`} className="category" > <img src={(img)} alt={alt} className="img" /> <p className="product" >{category} </p>  </NavLink>
                    </div>
                )
            } )}
        </div>
    )
}

export default Category
