import React from 'react'
import './Item.css'
import moka from '../../../assets/moka-pot-1209090_1920.jpg'
import press from '../../../assets/kettle-2220369_1920.jpg'
import coffe from '../../../assets/coffee-2698126_1920.jpg'
import expresso from '../../../assets/coffee-4928510_1920.jpg'


const data = [
    {
        id:1,
        category:"Coffe",
        url:"/coffe",
        img:coffe,
        alt:"coffe img"
    },
    {
        id:2,
        category:"French press",
        url:"/press",
        img:press,
        alt:"press img"
    },
    {
        id:3,
        category:"Moka",
        url:"/moka",
        img:moka,
        alt:"moka img"
    },
    {
        id:4,
        category:"Expresso",
        url:"/expresso",
        img:expresso,
        alt:"expresso img"
    }
]

const Item = () => {
    
    return (
        <div className="item">
            {data.map((link)=>{
                const {id, category, url, img, alt}= link
                return (
                    <div key={id} className="itemBox" >
                        <img src={(img)} alt={alt} className="img" />
                        <a href={url} className="category" >  {category} </a>
                    </div>
                )
            } )}
        </div>
    )
}

export default Item
