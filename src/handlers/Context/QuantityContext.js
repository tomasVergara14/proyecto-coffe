import React, {createContext, useContext, useState} from 'react'

export const QuantityContext = createContext()
console.log(QuantityContext)

export const useQuantityContext = ()=>useContext(QuantityContext)

const QuantityContextProvider = ({children})=>{

    const [quantity, setQuantity]= useState(1)

    return(
        <QuantityContext.Provider
        value={{
            quantity, 
            setQuantity
        }}>
            {children}
        </QuantityContext.Provider>
    )
}
export default QuantityContextProvider