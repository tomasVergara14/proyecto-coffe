import React from 'react'
import './CartForm.css'

const CartForm = ({name, tel, email,changes}) => {
    return (
        <div>
            <form className="FormCart" action="" onChange={changes}>
                <input 
                type="text"
                placeholder="Name"
                name="name"
                value={name} 
                />
                <input 
                type="text"
                placeholder="Telephone"
                name="tel"
                value={tel} 
                />
                <input 
                type="email"
                placeholder="Email"
                name="email"
                value={email} 
                />
                <button className="ButtonSend"> Send </button>
            </form>
        </div>
    )
}

export default CartForm
