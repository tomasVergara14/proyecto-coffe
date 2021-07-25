import React, {useEffect, useState,useParams} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Coffe from '../../../data/Coffe'

const ItemDetailContainer = () => {
    
    const CoffeData = Coffe
    const [item, setItem]=useState([])
    const idProduc = 1

    function handlerPromise(){
        setTimeout(()=>{
            Promise.resolve(CoffeData)
            .then(res => setItem(res))
        }, 2000)
    }
    
    useEffect(()=>{
        handlerPromise()
    },[])

    return (
        <div>
            {item.map((item, index)=>{
                const {id,name,gr,place,price,origin,height,description,img} = item
                if(id === idProduc){
                    return(
                        <ItemDetail name={name} gr={gr} place={place} price={price} origin={origin} height={height} description={description} img={img}/>
                    )
                }
            })}
            {/*  */}
        </div>
    )
}

export default ItemDetailContainer
