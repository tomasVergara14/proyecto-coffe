import React, {createContext, useContext, useState} from 'react'
import { getFirestore } from '../../services/firebaseService'
import firebase from 'firebase'
import 'firebase/firestore'

export const CartContext = createContext()

export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

    const [clicksNum, setClicksNum]=useState(0)
    const [Cart, setCart]=useState([])
    const [buyer, setBuyer]=useState({})
    const [idOrder,setIdOrder]=useState("")
    
    const newOrder = {buyer, item:Cart, date: firebase.firestore.Timestamp.fromDate(new Date()) }

    function guardarItem (newItem){  
        const idx = Cart.find(item => newItem.item.id === item.item.id)
        if(idx === undefined){
            setCart([...Cart,newItem])
        }else{
            const newCount = idx.quantity + newItem.quantity
            const uniqueList = Cart.filter(unique => unique.item.id !== newItem.item.id)
            setCart([...uniqueList,{item :newItem.item, quantity: newCount}])
        }    
    }

    function removeItem(ItemId){
        const Allproducts = Cart.filter(itemList => itemList.item.id !== ItemId)
        setCart(Allproducts)
    }

    function ClearItems(){
        setCart([])
    }
    
    const TotalItems = Cart.reduce((acc, item)=>{
        return acc += item.quantity
    },0)
    
    function Precio (PrecioElemento, CantidadElemento){
        return (Number(PrecioElemento) * Number(CantidadElemento))
     }

    const TotalPrice = Cart.reduce((acc, val)=>{
        return acc += (val.item.price * val.quantity)
    },0)

    const handlerChange=(event)=>{
        setBuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })
    }

    const handlerSubmit=(event)=>{
        event.preventDefault()
        const dbQuery = getFirestore()
        dbQuery.collection('order').add(newOrder)
        .then(response=>setIdOrder(response.id))
        setClicksNum(clicksNum +1)
    }

    return(
        <CartContext.Provider
        value={{ 
            Cart,
            buyer,
            guardarItem,
            removeItem,
            ClearItems,
            TotalItems,
            Precio,
            TotalPrice,
            handlerChange,
            handlerSubmit,
            idOrder,
            clicksNum
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider