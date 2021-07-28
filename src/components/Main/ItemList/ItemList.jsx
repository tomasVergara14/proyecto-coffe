import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import  Item  from '../Item/Item'
import Coffe from '../../../data/Coffe'
import './ItemList.css'


const ItemList = () => {
    
    const [item, setItem] = useState([])
    const CoffeData = Coffe
    const {itemId} = useParams()
    
    
    useEffect(()=>{
        setTimeout(()=>{
            Promise.resolve(CoffeData)
            .then(res =>{
                if(itemId === undefined){
                    setItem(res)
                }
                else{
                    setItem(res.filter(it=> it.id === itemId))
                }
            } ) 
        }, 2000)
    
    },[itemId])


    return (
        <div className="containerItemBox" >
            <h3>Productos</h3>
            <div className="container">
               
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
