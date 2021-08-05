import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import  Item  from '../Item/Item'
import DefineCategory from '../../../handlers/DefineCategory'
import './ItemList.css'


const ItemList = () => {
    
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId}=useParams()
    const {itemId} = useParams()

    const data = DefineCategory(categoryId)
    
    //Category y lista de productos de ese category
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            Promise.resolve(data)
            
            .then(res =>{
                if(itemId === undefined){
                    setLoading(false)
                    setItem(DefineCategory(categoryId))
                    
                    
                }
                else{
                    setLoading(false)
                    setItem(res.filter(it=> it.id === itemId))
                   
                   
                }
            } ) 
        }, 5000)
    
    },[itemId])


    return (
        <div className="containerItemBox" >
            <h3>Productos</h3>
            <div className="container">
                {loading && <div className="spinner"></div>}
                {item.map((link, index)=>{
                    const {id, name, place,price , img, description}= link
                    return(
                        
                        <NavLink className="containerItem" to={`/item/${id}`}>
                            <Item className="itemProduct" key={index}
                            img={img} name={name} price={price} description={description} />
                        </NavLink>
                        
                    )   
                    })}
                
            
            </div>
             
        </div>
    )
}

export default ItemList
