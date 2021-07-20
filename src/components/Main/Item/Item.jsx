import React, {useState, useEffect} from 'react'
import Arabica from '../../../assets/coffe-arabica.jpg'
import Robusta from '../../../assets/coffee-robusta.jpg'
import Kopi from '../../../assets/brown-.jpg'

const CoffeData= [
    {
        "id": 1,
        "name":"Arabica",
        "place":"Arabia",
        "description":"Tienen una espectacular riqueza aromatica, con sabor suave y profundo al mismo tiempo",
        "img": Arabica,
        "url":'/'
    },
    {
        "id": 2,
        "name":"Robusta",
        "place":"Centro America",
        "description":"Contienen aproximadamente el doble del estimulante, le da un sabor mas fuerte y amargo",
        "img": Robusta,
        "url":'/'
    },
    {
        "id": 3,
        "name":"Kopi",
        "place": "Etiopia",
        "description":"Una experiencia gourmet poco comun, granos extraidos del estiercol de civeta indonesia",
        "img": Kopi,
        "url":'/'
    }

]
const handlerPromise = async ()=>{
    setTimeout(()=>{
        return CoffeData
    },2000)
}

const Item = () => {
    const [itemValue, setItemValue] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setItemValue(CoffeData)
        },2000)
    },[])
    return (
        
        
        <div className="item">
            {itemValue.map((link)=>{
                const {id, name, place, img, description, url}= link
                return (
                    <div key={id} className="itemBox" >

                        
                        <a href={url} className="category" > <img src={(img)}  className="img" /> <h3>Granos de cafe</h3><li> {name} {place} {description} </li>  </a>
                    </div>
                )
                
            })}
            {console.log(itemValue)}
        </div>
    )
}

export default Item


