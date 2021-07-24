import React, {useState, useEffect} from 'react'
import  Item  from '../Item/Item'
import Coffe from '../../../data/Coffe'
import './ItemList.css'


const ItemList = () => {
    
    const [item, setItem] = useState([])
    const CoffeData = Coffe
    
    console.table(item)
    function handlerPromise(){
        setTimeout(()=>{
            Promise.resolve(CoffeData)
            .then(response =>setItem(response) )
        }, 2000)
    }
    
    useEffect(()=>{
        handlerPromise()
    },[])


    return (
        <div className="containerItemBox" >
            <h3>Product</h3>
            <div className="containerItem">
                {item.map((link, index)=>{
                    const {id, name, place,price , img, description}= link
                    return(
                        <Item key={index}
                        img={img} name={name} price={price} description={description} />
                    )   
                    })}
                
            
            </div>
             
        </div>
    )
}

export default ItemList
