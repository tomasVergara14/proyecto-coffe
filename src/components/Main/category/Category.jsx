import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import { NavLink } from 'react-router-dom'
import categoriesData from '../../../data/Categories'
import { getFirestore } from '../../../services/firebaseService'

const Category = () => {
    
    const [category, setCategory]=useState([])
    const {categoryId} = useParams()
    const data = categoriesData
    const dbQuery = getFirestore()
    
    
    
    useEffect(()=>{
        // setTimeout(()=>{
        //     Promise.resolve(data)
        //     .then(res =>{
        //         if(categoryId === undefined){
        //             setCategory(res)
        //         }
        //         else{
        //             setCategory(res.filter(it=> it.id === categoryId))
        //         }
        //     } ) 
        // }, 0)
        dbQuery.collection('categories').get()
        .then(response=>setCategory(response.docs.map(cat=>(
            {...cat.data(), id:cat.id}   
        ))))
        console.log(category)
},[])
    
    return (
        <div className="item">
            {category.map((categories)=>{
                const {id, category, url, img, alt}= categories
                return (
                    <div key={id} className="itemBox" > 
                        <NavLink to={`${url}${categories.id}`} className="category" key={id}> <img src={(img)} alt={alt} className="img" /> <p className="product" >{category} </p>  </NavLink>
                    </div>
                )
            } )}
        </div>
    )
}

export default Category
