import React from 'react'

const ForesatDate = ({ day }) => {
    let today = new Date();
    let date = new Date(today);
    date.setDate(date.getDate() + +day);
    
    let dayDate = date.getDate();
    let month = date.getMonth();
    const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let forecastDate = +day === 1 ? "Tomorrow" : `${months[month]} ${dayDate}`;
    return (
           <span className = "date">
               {forecastDate}
           </span> 
    )
}

export default ForesatDate
