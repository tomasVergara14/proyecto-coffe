import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import  Item  from '../Item/Item'
import { getFirestore } from '../../../services/firebaseService'
import '../ItemList/ItemList.css'
import getCoffeInfo from '../../../handlers/getCoffeInfo'


const CoffeItems = () => {

    const [item, setItem] = useState([])
    useEffect(() => {
        const data = getCoffeInfo.get()
        .then(datita=>setItem(datita.docs.map(item=>(
            {...item.data(), id:item.id}
        ))))
    }, [])
    console.log(item)
    
    

    //Category y lista de productos de ese category
    useEffect(()=>{
        // setTimeout(()=>{
        //     Promise.resolve(data)
        //     .then(res =>{
        //         setItem(res)
        //         }
        //      ) 
        // }, 0)
    },[])


    return (
        <div className="containerItemBox" >
            <h3>Cafe</h3>
            <div className="container">
                {item.map((link)=>{
                    const {id, categoryId,title,price, image, description}= link
                    return(
                        <NavLink key={link.id} className="containerItem" to={`/item/${id}`}>
                            <Item className="itemProduct" 
                            img={image} name={title} price={price} description={description} />
                        </NavLink>      
                    )   
                    })}
            </div>
        </div>
    )
}

export default CoffeItems
