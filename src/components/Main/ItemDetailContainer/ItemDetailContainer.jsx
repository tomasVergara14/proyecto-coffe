import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import DefineItemDetail from '../../../handlers/DefineItemDetail'
import { useProductContext } from '../../../handlers/Context/ProductContext'
import { getFirestore } from '../../../services/firebaseService'
import ItemCount from '../../itemCount/ItemCount'

const ItemDetailContainer = () => {
    
    const {product, setProduct} = useProductContext()
    
    const [item, setItem]=useState([])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()


    const dbQuery = getFirestore()
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
        setLoading(true)
        dbQuery.collection('items').get()
        .then(response=>{
            if(itemId === undefined){
                setLoading(false)
                setItem(response.docs.map(itemFirebase=>(
                    {...itemFirebase.data(), id: itemFirebase.id}
                )))
            }else{
                setLoading(false)
                const filterItem = response.docs.filter(ite=> ite.id === itemId)
                setItem({...filterItem[0].data(), id:filterItem[0].id})
            }
        })
    }, [])

    useEffect(() => {
        setProduct(item)
    }, [item])
    console.log(product)
    
    return (
        <div>
            {loading && <div className="spinner"></div>}
            <div key={item.id}>
                    <ItemDetail  name={item.title} gr={item.title} place={item.title} price={item.price} origin={item.title} height={item.title} description={item.description} img={item.image}/>
            </div>
        </div>
     )
}

export default ItemDetailContainer
