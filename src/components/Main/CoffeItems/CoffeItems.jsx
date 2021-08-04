import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import  Item  from '../Item/Item'
import getCoffeInfo from '../../../handlers/getCoffeInfo'
import '../ItemList/ItemList.css'


const CoffeItems = () => {
    
    const [item, setItem] = useState([])

    const data = getCoffeInfo
    
    //Category y lista de productos de ese category
    useEffect(()=>{
        setTimeout(()=>{
            Promise.resolve(data)
            .then(res =>{
                setItem(res)
                }
             ) 
        }, 0)
    
    },[data])


    return (
        <div className="containerItemBox" >
            <h3>Cafe</h3>
            <div className="container">
                {item.map((link, index)=>{
                    const {id, name,price , img, description}= link
                    return(
                        
                        <NavLink key={link.id} className="containerItem" to={`/item/${id}`}>
                            <Item className="itemProduct" 
                            img={img} name={name} price={price} description={description} />
                        </NavLink>
                        
                    )   
                    })}
                
            
            </div>
             
        </div>
    )
}

export default CoffeItems
