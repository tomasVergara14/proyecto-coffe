import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import DefineItemDetail from '../../../handlers/DefineItemDetail'

const ItemDetailContainer = () => {
    
    
    const [item, setItem]=useState([])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    const data = DefineItemDetail(itemId)

    
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            Promise.resolve(data)
            .then(res =>{
                if(itemId === undefined){
                    setLoading(false)
                    setItem( DefineItemDetail(itemId))
                    
                }
                else{
                    setLoading(false)
                    setItem(res.filter(it=> it.id === itemId))
                   
                }
            } ) 
        }, 1000)
    
    },[itemId])


    return (
        <div>
            {loading && <div className="spinner"></div>}
            {item.map((item)=>{
                const {id,name,gr,place,price,origin,height,description,img} = item
                    return(
                        <ItemDetail key={item.id} name={name} gr={gr} place={place} price={price} origin={origin} height={height} description={description} img={img}/>
                    )
            })}
        </div>
    )
}

export default ItemDetailContainer
