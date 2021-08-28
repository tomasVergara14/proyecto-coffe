import React from 'react'
import emailjs from 'emailjs-com';
import './SendEmail.css'

const SendEmailForm = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmailTemplate_react', 'template_g8aqs6d', e.target, "user_2ekQ7iS2iExODDxugREGx")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
      return (
        <form className="contact-form" onSubmit={sendEmail}>
          
          <label className="ContactLabel" >Nombre</label>
          <input className="ContactInput" type="text" name="user_name" />
          <label className="ContactLabel" >Email</label>
          <input className="ContactInput" type="email" name="user_email" />
          <label className="ContactLabel" >Numero de contacto</label>
          <input className="ContactInput" type="text" name="contact_number" />
          <label className="ContactLabel" >Message</label>
          <br />
          <textarea className="ContactTextArea" name="message" rows="5"  />
          <input className="ContactSendButton" type="submit" value="Send" />
        </form>
      );
}

export default SendEmailForm
