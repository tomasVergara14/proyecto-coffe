import React from 'react'
import './CartForm.css'

const CartForm = ({name, tel, email,emailRepeat,changes, submit }) => {


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
                <input 
                type="email"
                className="InputForm"
                placeholder="Repeat Email"
                name="emailRepeat"
                defaultValue={emailRepeat} 
                />
                <button className="ButtonSend" >Realizar compra</button>  
            </form>
        </div>
    )
}

export default CartForm
