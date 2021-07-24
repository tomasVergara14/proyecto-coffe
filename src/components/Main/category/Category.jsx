import React from 'react'
import './Category.css'
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

const Category = () => {
    
    return (
        <div className="item">
            {data.map((categories)=>{
                const {id, category, url, img, alt}= categories
                return (
                    <div key={id} className="itemBox" >
                        
                        <a href={url} className="category" > <img src={(img)} alt={alt} className="img" /> <p className="product" >{category} </p>  </a>
                    </div>
                )
            } )}
        </div>
    )
}

export default Category
