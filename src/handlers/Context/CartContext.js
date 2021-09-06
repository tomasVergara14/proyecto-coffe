import React, {createContext, useContext, useState} from 'react'
import { getFirestore } from '../../services/firebaseService'
import firebase from 'firebase'
import 'firebase/firestore'
import swal from 'sweetalert'

export const CartContext = createContext()

export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

    const [Cart, setCart]=useState([])
    const [buyer, setBuyer]=useState({})
    const [idOrder,setIdOrder]=useState("")
    const [clicksNum, setClicksNum]=useState(0)
    var errors=[]
    
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

    const validatesName = ()=>{
        if(buyer.name ===undefined || buyer.name.length<3){
            errors.push({Message:"El nombre debe tener mas de 3 caracteres"})
            console.log(errors[0].Message)
        }
    }
    const validatesTel = ()=>{ 
         if( buyer.tel === undefined || (isNaN(buyer.tel) && buyer.tel.length <7) ){
            errors.push({Message:"El campo de telefono solo acepta numeros"})
            console.log(errors)
        }
    }
    const validatesRepeat = ()=>{
        if( (buyer.emailRepeat !== buyer.email)){
            errors.push({Message:"El mail no coincide"})
            console.log(errors)
        }
    }
    console.log(errors)

    const handlerSubmit=(event)=>{
    
            event.preventDefault()
        
            validatesName()
            validatesTel()
            validatesRepeat()
            if( !buyer.name && !buyer.tel && !buyer.email && errors.length===0 ){
                const dbQuery = getFirestore()
                dbQuery.collection('order').add(newOrder)
                .then(response=>setIdOrder(response.id))
                setClicksNum(clicksNum +1)
            }else{
                swal("Revisa", ` ${errors[0].Message}`, "warning")
            }
        
           
    }

    const CleanOrder=()=>{
        if(Cart.length===0){
            setClicksNum(0)
            setBuyer("")
            setIdOrder("")
        }
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
            clicksNum,
            CleanOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider