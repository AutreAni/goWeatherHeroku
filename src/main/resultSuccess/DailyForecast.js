import React, {Fragment} from 'react';
import Temperature from './Temperature';
import Wind from './Wind';
import ForesatDate from './Date';


const DailyForeCast = ({ day, temperature, wind }) => {
    const intWind = parseInt(wind);
    const intTemp = parseInt(temperature)
    return (
        <Fragment>
        {intWind || intTemp ? 
            <div>
            <ForesatDate
            day = {day} />
            {intTemp? 
            <Temperature
            temperature = { temperature } 
            /> : null }
            {intWind? 
            <Wind
            wind = { wind }
             /> : null }           
         </div> : null
         }
         
        </Fragment>
    )
}

export default DailyForeCast
