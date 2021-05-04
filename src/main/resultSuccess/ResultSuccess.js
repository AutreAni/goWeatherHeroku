import React from 'react';
import Forecasts from './Forecast';
import Todays from './Todays';

const ResultSuccess = ({ capital, result }) => {

    return (
        <div className = "card">
          <span className = "location">
              {capital[0].toUpperCase() + capital.slice(1)} 
          </span>
          <div className = "content-wrapper"> 
          <Todays
          temperature = { result.temperature }
          wind = { result.wind }
          description = { result.description }
          />
          <Forecasts
           forecast = { result.forecast }
           />
           </div> 
        </div>
    )
}

export default ResultSuccess
