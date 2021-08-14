import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import  Item  from '../Item/Item'
import DefineCategory from '../../../handlers/DefineCategory'
import './ItemList.css'


const ItemList = () => {
    
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory}=useParams()
    const {itemId} = useParams()

    const products = DefineCategory(idCategory)

    useEffect(()=>{
        products.get()
        .then(response=>{
            setLoading(true)
            if(itemId===undefined){
                setLoading(false)
                setItem(response.docs.map(itm=>(
                    {...itm.data(), id:itm.id}
                )))
            }else{
                setLoading(false)
                const productFilter = response.docs.filter(itm => itm.data().id === itemId )
                console.log(productFilter[0].data())
                setItem({...productFilter[0].data(), id:productFilter[0].id})
            }
        })    
    },[itemId])
    console.log(item)

    return (
        <div className="containerItemBox" >
            <h3>Productos</h3>
            <div className="container">
                {loading && <div className="spinner"></div>}
                {item.map((link, index)=>{
                    const {id, title, price , image, description}= link
                    return(                        
                        <NavLink key={id} className="containerItem" to={`/item/${id}`}>
                            <Item className="itemProduct" key={index}
                            img={image} name={title} price={price} description={description} />
                        </NavLink>                        
                    )   
                    })}                            
            </div>             
        </div>
    )
}

export default ItemList
