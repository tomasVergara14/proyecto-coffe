import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext()


export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

    
    const [Cart, setCart]=useState([])

    function guardarItem (newItem){
        //identificamos item repetidos
        const idx = Cart.find(item => newItem.product[0].id === item.product[0].id)
        console.log(idx)
        if(idx === undefined){
            setCart([...Cart,newItem])
        }else{
            const uniqueList = Cart.filter(unique => unique.product[0].id !== newItem.product[0].id)
            setCart([...uniqueList,newItem])
        }
        
    }
    function removeItem(list){
        const newCart = Cart.filter(itemToRemove=> itemToRemove.product[0]!== list.product[0].id)
        setCart([...newCart, list])
    }

    return(
        <CartContext.Provider
        value={{ 
            Cart,
            guardarItem,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider