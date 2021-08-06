import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext()


export const useCartContext = ()=>useContext(CartContext)

const CartContextProvider = ({children})=>{

    
    const [Cart, setCart]=useState([])

    function guardarItem (newItem){
        //identificamos item repetidos
        const idx = Cart.find(item => newItem.item[0].id === item.item[0].id)
        console.log(idx)
        if(idx === undefined){
            setCart([...Cart,newItem])
        }else{
            const newCount = idx.quantity + newItem.quantity
            console.log(newCount)
            const uniqueList = Cart.filter(unique => unique.item[0].id !== newItem.item[0].id)
            setCart([...uniqueList,{item :newItem.item, quantity: newCount}])
        }
        
    }
    // function removeItem(id){
    //     }
        
    // }

    return(
        <CartContext.Provider
        value={{ 
            Cart,
            guardarItem,
            // removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider