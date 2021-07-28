import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Coffe from '../../../data/Coffe'

const ItemDetailContainer = () => {
    
    const CoffeData = Coffe
    const [item, setItem]=useState([])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    
    useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
                Promise.resolve(CoffeData)
                .then(res =>{
                    if(itemId === undefined){
                        setItem(res)
                        setLoading(false)
                    }
                    else{
                        setItem(res.filter(it=> it.id === itemId))
                        setLoading(false)
                    }
                } ) 
            }, 2000)
        
    },[itemId])

    console.log(itemId)

    return (
        <div>
            {loading && "cargando..."}
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
