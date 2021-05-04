import React from 'react';

const ResultNotFound = () => {
    return (
        <div className = "container"
        style = {{textAlign: "center"}}>
            <h1 className = "error">
                Result was not found
            </h1>
            <p>
               Try searching for other city
            </p>
        </div>
    )
}

export default ResultNotFound
