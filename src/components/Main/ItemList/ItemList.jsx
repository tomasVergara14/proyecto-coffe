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
    // const res = products.get()
    // .then(response=>console.log(response.docs[0].data()))
    
    //Category y lista de productos de ese category
    useEffect(()=>{
        // setLoading(true)
        // setTimeout(()=>{
        //     Promise.resolve(data) 
        //     .then(res =>{
        //         if(itemId === undefined){
        //             setLoading(false)
        //             setItem(DefineCategory(idCategory))

        //         }
        //         else{
        //             setLoading(false)
        //             setItem(res.filter(it=> it.id === itemId))        
        //         }
        //     } ) 
        // }, 5000)
        const productsData = products.get()
        .then(response=>{
            console.log(response.docs[1].data())
            console.log(item)
            if(itemId===undefined){
                setItem(response.docs.map(itm=>(
                    {...itm.data(), id:itm.id}
                )))
            }else{
                const productFilter = response.docs.filter(itm => itm.data().id === itemId )
                setItem(productFilter[0].data())
            }
            console.log(item)
        })
    
    },[itemId])


    return (
        <div className="containerItemBox" >
            <h3>Productos</h3>
            <div className="container">
                {loading && <div className="spinner"></div>}
                {item.map((link, index)=>{
                    const {id, title, price , image, description}= link
                    return(
                        
                        <NavLink className="containerItem" to={`/item/${id}`}>
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
