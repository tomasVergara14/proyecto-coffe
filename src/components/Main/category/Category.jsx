import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import { NavLink } from 'react-router-dom'
import categoriesData from '../../../data/Categories'
import { getFirestore } from '../../../services/firebaseService'



const Category = () => {
    
    const [category, setCategory]=useState([])
    const {categoryId} = useParams()
    // const data = categoriesData
    const url = "/category/"
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
                const { categoryId, image, title, id}= categories
                return (
                    <div key={id} className="itemBox" > 
                        <NavLink to={`${url}${categories.categoryId}`} className="category" key={id}> <img src={(image)} alt="Imagen de granos de cafe" className="img" /> <p className="product" >{title} </p>  </NavLink>
                    </div>
                )
            } )}
        </div>
    )
}

export default Category
