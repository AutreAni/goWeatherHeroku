import React from 'react';
import DailyForecast from './DailyForecast';
import './../../css-modules/main/forecasts/style.css';

const Forecasts = ({ forecast }) => {
    return (
        <div className = "forecasts">
        <ul>
            {forecast.map(date =>
            parseInt(date.temperature) || parseInt(date.wind) ?
                <li key = {+date.day}>
                    <DailyForecast
                        day = { date.day }
                        temperature = { date.temperature }
                        wind = { date.wind }
                    />
                </li> : null
            )
            }
        </ul>
        </div>
    )
}

export default Forecasts;
