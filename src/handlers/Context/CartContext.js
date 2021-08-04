import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext()
console.log(CartContext)

export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

    const [quantity, setQuantity]= useState(1)
    const [Cart, setCart]=useState("hola")
    const [ product, setProduct]= useState("hola")

    return(
        <CartContext.Provider
        value={{
            quantity, 
            Cart,
            product, 
            setProduct,
            setQuantity,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider