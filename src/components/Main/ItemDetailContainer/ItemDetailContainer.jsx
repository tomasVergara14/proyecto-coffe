import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import DefineItemDetail from '../../../handlers/DefineItemDetail'
import { useProductContext } from '../../../handlers/Context/ProductContext'
import { getFirestore } from '../../../services/firebaseService'

const ItemDetailContainer = () => {
    
    const {setProduct} = useProductContext()
    
    const [item, setItem]=useState([])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()


    const data = DefineItemDetail(itemId)

    // useEffect(()=>{
    //     setLoading(true)
    //     setTimeout(()=>{
    //         Promise.resolve(data)
    //         .then(res =>{
    //             if(itemId === undefined){
    //                 setLoading(false)
    //                 setItem( DefineItemDetail(itemId))    
    //             }
    //             else{
    //                 setLoading(false)
    //                 setItem(res.filter(it=> it.id === itemId))
    //         } }) 
    //     }, 1000)
    // },[itemId])

    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('items').get()
        .then(response=>setItem(response.docs.map((itemFirebase, index)=>(
            {...itemFirebase.data(), id: itemFirebase.id}
        ))))
    }, [])
    console.log(item)

    // useEffect(() => {
    //     const getItem = data.filter((item)=>
    //         item.id === itemId
    //     )
    //     setProduct(getItem)
    // }, [itemId])

    
    return (
        <div>
            {loading && <div className="spinner"></div>}
            {item.map((item)=>{
                const {id,name,gr,place,price,origin,height,description,img} = item
                    return(
                        <div key={item.id}>
                        <ItemDetail  name={name} gr={gr} place={place} price={price} origin={origin} height={height} description={description} img={img}/>
                        </div>
                    )
            })}
        </div>
     )
}

export default ItemDetailContainer
