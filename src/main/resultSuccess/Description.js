import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCloudSun,
    faSun,
    faCloud,
    faCloudRain,
    faCloudShowersHeavy,
    faBolt

  } from '@fortawesome/free-solid-svg-icons';

const Description = ({ description }) => {
    let forecastIcon;
    let color;
    switch( description) {
        case "Light cloud":
        case "Partly cloudy":
        case "Patchy rain possible":
            forecastIcon = faCloudSun;
            color = "rgba(233,164,0,0.3)";
            break;
        case "Heavy Cloud":
            forecastIcon = faCloud;
            color = "rgb(204, 204, 204)";
            break;
        case "Clear":
        case "Sunny":
            forecastIcon = faSun;
            color = "rgb(233,164,0)";
            break;
        case "Light rain":
        case "Light rain shower":
            forecastIcon = faCloudRain;
            color = 'lightblue';
             break;
        case "Heavy rain":
        case "Showers":
        case "Shower in vicinity, rain and small hail/snow pallets shower":
        case "Moderate or heavy rain shower":
            forecastIcon = faCloudShowersHeavy;
            color = "rgb(7,105,140)";
            break;
        case "Thunder":
            forecastIcon = faBolt;
            color = "rgb(233,164,0)";
            break;
           
        default:
            forecastIcon = faCloudSun;
            color = "rgba(233,164,0,0.3)";
    }
    return (
        <div className = "description">
            {forecastIcon ? <FontAwesomeIcon 
            style = {{color: color}}
            className = "icon descIcon"
            icon = { forecastIcon } /> :null
            }
            <span>{ description}</span>
        </div>
    )
}

export default Description
