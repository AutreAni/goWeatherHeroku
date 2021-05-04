import React from 'react';
import Temperature from './Temperature';
import Wind from './Wind';
import Description from './Description';
import '../../css-modules/main/todays/style.css';



const Todays = ({ temperature, wind, description }) => {
    
    const intTemp = parseInt(temperature);
    const intWind = parseInt(wind);
    

    return (
        <div className = "current">
         <span className = "current-day">Current weather</span>
            {description ?
            <Description 
            description = { description }
            /> : null }
            {intTemp ?
            <Temperature
            temperature = { temperature } 
            /> : null }
            {intWind ?            
            <Wind
            wind = { wind }                 
            /> : null }           
        </div>
    )
}

export default Todays
