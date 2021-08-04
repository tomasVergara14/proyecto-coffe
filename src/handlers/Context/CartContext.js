import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext()
console.log(CartContext)

export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

    
    const [Cart, setCart]=useState("hola")

    return(
        <CartContext.Provider
        value={{ 
            Cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider