import React, {createContext, useContext, useState} from 'react'

export const ProductContext = createContext()


export const useProductContext = ()=>useContext(ProductContext)

const ProductContextProvider = ({children})=>{

    const [ product, setProduct]= useState({})

    return(
        <ProductContext.Provider
        value={{
            product, 
            setProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider