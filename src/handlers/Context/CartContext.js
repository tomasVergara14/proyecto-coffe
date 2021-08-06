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
            setCart([...uniqueList,{item :newItem.item, quantity: newItem.quantity + newCount}])
        }
        
    }
    // function removeItem(list){
    //     const idx = Cart.find(item => list.product[0].id === item.product[0].id)
    //     if(idx !== undefined){
    //         const newCart = Cart.filter(itemToRemove=> itemToRemove.product[0].id!== list.product[0].id)
    //         setCart([newCart])
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