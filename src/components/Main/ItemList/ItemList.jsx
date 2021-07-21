import React, {useState, useEffect} from 'react'
import  Item  from '../Item/Item'
import Coffe from '../../../data/Coffe'

// const [itemValue, setItemValue] = useState([])
//     useEffect(()=>{
//         setTimeout(()=>{
//             setItemValue(CoffeData)
//         },2000)
//     },[])


//     {itemValue.map((link)=>{
//         const {id, name, place, img, description, url}= link
//         return (
//             <div key={id} className="itemBox" >

                
//                 <a href={url} className="category" > <img src={(img)}  className="img" /> <h3>Granos de cafe</h3><li> {name} {place} {description} </li>  </a>
//             </div>
//         )
        
//     })}
//     {console.log(itemValue)}

const ItemList = () => {
    
    const [item, setItem] = useState([])
    const CoffeData = Coffe
    
    console.table(item)
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
        <div className="containerItem" >
            {item.map((link, index)=>{
                const {id, name, place,price , img, description}= link
                return(
                    <Item key={index}
                    img={img} name={name} price={price} description={description} />
                )   
                })}
             
             
        </div>
    )
}

export default ItemList
