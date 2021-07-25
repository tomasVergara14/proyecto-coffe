import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Coffe from '../../../data/Coffe'

const ItemDetailContainer = () => {
    
    const CoffeData = Coffe
    const [item, setItem]=useState([])

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
        <div>
            <ItemDetail name="a"gr="a"place="a"price="a"origin="a"height="a"description="a"img=""/>
        </div>
    )
}

export default ItemDetailContainer
