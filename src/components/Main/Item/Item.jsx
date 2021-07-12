import React from 'react'
import './Item.css'


const data = [
    {
        id:1,
        category:"Coffe",
        url:"/coffe",
        img:"../../../assets/moka-pot-1209090_1920.jpg",
        alt:"coffe img"
    },
    {
        id:2,
        category:"French press",
        url:"/press",
        img:"../../../assets/moka-pot-1209090_1920.jpg",
        alt:"press img"
    },
    {
        id:3,
        category:"Moka",
        url:"/moka",
        img:"../../../assets/moka-pot-1209090_1920.jpg",
        alt:"moka img"
    },
    {
        id:4,
        category:"Expresso",
        url:"/expresso",
        img:"../../../assets/moka-pot-1209090_1920.jpg",
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
