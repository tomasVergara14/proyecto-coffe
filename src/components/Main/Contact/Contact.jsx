import React from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

const Contact = () => {
    return (

        <div className="Contact" >
            <h2 className="ContactTitle">Puedes escribirnos por: </h2>
            <div className="ContactContainerItems">
                <a href="https://www.linkedin.com/in/tomasvergara/">
                    <div className="ContactItem">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <p>LinkedIn</p> 
                    </div> 
                </a> 
                <a href="https://github.com/tomasVergara14">
                    <div className="ContactItem" >
                        <FontAwesomeIcon icon={faGithub}/>
                        <p>GitHub</p> 
                    </div> 
                </a> 
                <NavLink to="/contact/mail">
                    <div className="ContactItem" >
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>Gmail</p> 
                    </div> 
                </NavLink> 
            </div>
        </div>
        
    )
}

export default Contact
