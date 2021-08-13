import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import { NavLink } from 'react-router-dom'
import { getFirestore } from '../../../services/firebaseService'



const Category = () => {
    
    const [category, setCategory]=useState([])
    const {idCategory} = useParams()
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
        .then(response=>
            {if(idCategory === undefined){
                setCategory(response.docs.map(cat=>(
                    {...cat.data(), id:cat.id} 
                )))
            }else{
                const categoryFilter = response.docs.filter(cat => cat.data().categoryId === idCategory )
                setCategory(categoryFilter[0].data())
            }
            }
            )
            console.log(category)
        console.log(idCategory)
},[idCategory])
    
    return (
        <div className="item">
            {category.length >1 ?
            category.map((categories)=>{
                const { categoryId, image, title, id}= categories
                return (
                    <div key={id} className="itemBox" > 
                        <NavLink to={`${url}${categories.categoryId}`} className="category" key={id}> <img src={image} alt="Imagen de granos de cafe" className="img" /> <p className="product" >{title} </p>  </NavLink>
                    </div>
                )
            } )
            :   <div key={category.id} className="itemBox" > 
                    <NavLink to={`${url}${category.categoryId}`} className="category" key={category.id}> <img src={category.image} alt="Imagen de granos de cafe" className="img" /> <p className="product" >{category.title} </p>  </NavLink>
                </div>
            }
        </div>
    )
}

export default Category
