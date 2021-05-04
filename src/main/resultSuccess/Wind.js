import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const Wind = ({ wind}) => {
    return (
        <div className = "wind">
        <FontAwesomeIcon className = "icon"
        style = {{ color: "lightblue" }}
        icon = { faWind }/>
        <span>{ wind }</span>
            
        </div>
    )
}

export default Wind
