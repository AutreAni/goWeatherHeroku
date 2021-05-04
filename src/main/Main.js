import React, { useState, useEffect } from 'react';
import ResultSuccess from './resultSuccess/ResultSuccess';
import Error from './Error';
import ResultNotFound from './ResultNotFound';
import Loading from './Loading';
import '../css-modules/main/style.css'

const Main = ({ capital, submitted , handleSubmit, loading, handleLoading}) => {
    const [requestResult, setRequestResult] = useState({});
    const [requestErr, setRequestErr] = useState();

    const URL = `https://goweather.herokuapp.com/weather/${capital}`;
    useEffect(()=> {
    fetch(URL)
    .then(result => result.json())
    .then(data => {
      setRequestResult(data);
      setRequestErr(false);
      handleLoading(false);
    })
    .catch(err => {
      setRequestErr(err.message);
      handleLoading(false);
    });
  }, [capital]);

  
  return (
        <div className = "main">
        <div className = "container">
          {loading ? 
          <Loading />:null}
          {(requestResult.temperature ||
          requestResult.wind )
          && !loading?
          <ResultSuccess
          capital = { capital }
          result = { requestResult}
          /> : null
          }
          {requestErr && !loading? 
          <Error
            message = { requestErr }
          /> : null} 
          {(!requestResult.temperature) &&
          !requestErr &&
          !loading &&
          submitted ?
            <ResultNotFound
            handleSubmit = { handleSubmit }
            /> : null
           }
           </div>
        </div>
    )
}

export default Main
