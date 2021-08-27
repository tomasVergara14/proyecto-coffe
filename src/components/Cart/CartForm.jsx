import React from 'react'
import './CartForm.css'

const CartForm = ({name, tel, email,changes, submit }) => {


    return (
        <div>
            <form className="FormCart" action="/" onChange={changes} onSubmit={submit} >
                <input 
                type="text"
                className="InputForm"
                placeholder="Name"
                name="name"
                defaultValue={name}
                />
                <input 
                type="text"
                className="InputForm"
                placeholder="Telephone"
                name="tel"
                defaultValue={tel} 
                />
                <input 
                type="email"
                className="InputForm"
                placeholder="Email"
                name="email"
                defaultValue={email} 
                />
                <button className="ButtonSend" > Send </button>  
            </form>
        </div>
    )
}

export default CartForm
