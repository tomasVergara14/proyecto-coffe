import React from 'react'
import './Mug.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMugHot} from '@fortawesome/free-solid-svg-icons'


function Mug() {
    return (
        <div>
            <FontAwesomeIcon icon={faMugHot} className="Mug" />
        </div>
    )
}
export default Mug

