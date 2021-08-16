import React from 'react'
import './CartForm.css'

const CartForm = ({name, tel, email,changes, submit}) => {
    return (
        <div>
            <form className="FormCart" action="" onChange={changes} onSubmit={submit}>
                <input 
                type="text"
                placeholder="Name"
                name="name"
                value={name} 
                defaultValue=""
                />
                <input 
                type="text"
                placeholder="Telephone"
                name="tel"
                value={tel} 
                defaultValue=""
                />
                <input 
                type="email"
                placeholder="Email"
                name="email"
                value={email} 
                defaultValue=""
                />
                <button className="ButtonSend"> Send </button>
            </form>
        </div>
    )
}

export default CartForm
