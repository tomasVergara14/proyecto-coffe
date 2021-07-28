import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Coffe from '../../../data/Coffe'

const ItemDetailContainer = () => {
    
    const CoffeData = Coffe
    const [item, setItem]=useState([])
    const {id} = useParams()

    
    useEffect(()=>{
            setTimeout(()=>{
                Promise.resolve(CoffeData)
                .then(res =>{
                    if(id === undefined){
                        setItem(res)
                    }
                    else{
                        setItem(res.filter(it=> it.id === id))
                    }
                } ) 
            }, 2000)
        
    },[id])

    console.log(id)

    return (
        <div>
            {item.map((item, index)=>{
                const {id,name,gr,place,price,origin,height,description,img} = item
                    return(
                        <ItemDetail name={name} gr={gr} place={place} price={price} origin={origin} height={height} description={description} img={img}/>
                    )
            })}
        </div>
    )
}

export default ItemDetailContainer
