import React, {createContext, useContext, useState} from 'react'
import { getFirestore } from '../../services/firebaseService'
import firebase from 'firebase'
import 'firebase/firestore'

export const CartContext = createContext()

export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

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

    const TotalPrice = Cart.reduce((acc, val)=>{
        return acc += (val.item.price * val.quantity)
    },0)

    const handlerChange=(event)=>{
        setBuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })
    }
    console.log(buyer)

    const handlerSubmit=(event)=>{
        event.preventDefault()
        const dbQuery = getFirestore()
        dbQuery.collection('order').add(newOrder)
        .then(response=>setIdOrder(response.id))
        {<p>Tu orden de compra {idOrder} </p>}
    }
    console.log(idOrder)
    return(
        <CartContext.Provider
        value={{ 
            Cart,
            buyer,
            guardarItem,
            removeItem,
            ClearItems,
            TotalItems,
            TotalPrice,
            handlerChange,
            handlerSubmit,
            idOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider