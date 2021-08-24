import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import { NavLink } from 'react-router-dom'
import { getFirestore } from '../../../services/firebaseService'


const Category = () => {
    
    const [category, setCategory]=useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()
    const url = "/category/"
    const dbQuery = getFirestore()
    
    useEffect(()=>{
        setLoading(true)
        dbQuery.collection('categories').get()
        .then(response=>
            {if(idCategory === undefined){
                setLoading(false)
                setCategory(response.docs.map(cat=>(
                    {...cat.data(), id:cat.id} 
                )))
            }else{
                const categoryFilter = response.docs.filter(cat => cat.data().categoryId === idCategory )
                setLoading(false)
                setCategory(categoryFilter[0].data())
            }}
            )
},[idCategory])
    
    return (
        <div className="item">
            {loading && <div className="spinner"></div>}
            {category.length >1 ?
            category.map((categories)=>{
                const { image, title, id}= categories
                return (
                    <div key={id} className="itemBox" > 
                        <NavLink to={`${url}${categories.categoryId}`} className="category" key={id}> <img src={image} alt="" className="img" /> <p className="product" >{title} </p>  </NavLink>
                    </div>
                )
            } )
            :   <div key={category.id} className="itemBoxTitle" >
                    <div>
                        <img className="banner" src={category.banner} alt="" />
                    </div> 
                    <h3>{category.title} </h3>
                    
                </div>
            }
        </div>
    )
}

export default Category
