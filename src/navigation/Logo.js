import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
    return (
        <div className = "logo">
            <FontAwesomeIcon className = "icon"
            icon = {faCloudSun}/>
            <span>Jiffy Weather</span>
        </div>
    )
}

export default Logo
