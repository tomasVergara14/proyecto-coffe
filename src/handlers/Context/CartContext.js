import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext()


export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

    
    const [cart, setCart]=useState([])

    return(
        <CartContext.Provider
        value={{ 
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider