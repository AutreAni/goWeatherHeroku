import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

const Temperature = ({ temperature }) => {
    let color
    let tempIcon
    if(parseInt(temperature) > 0 ){
        tempIcon = faTemperatureHigh;
        color = (parseInt(temperature)) < 25 ? "rgb(233,164,0)" : "rgb(204,54,1)";
    }else {
        tempIcon = faTemperatureLow;
        color = "lightblue"
    }
    return (
        <div className = "temperature">
            <FontAwesomeIcon className = "icon"
            style = {{color: color}}
            icon = { tempIcon} />
            <span>{ temperature }</span>
        </div>
    )
}

export default Temperature
