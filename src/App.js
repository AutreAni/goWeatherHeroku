import './App.css';
import Navigation from './navigation/Navigation';
import { useState } from 'react';
import Main from './main/Main';

const App = () => {
  const [capital, setCapital ] = useState('Yerevan');
  const [searchValue, setSearchValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSearchValue = text =>  setSearchValue(text);

  const handleSubmit = text => {
    if( loading ) return;
    setSubmitted(true);
    setCapital(text);
    setLoading(true);
    setSearchValue("");
  }
  
  return (
    <div className="App">
     <Navigation
       searchValue = { searchValue }
       handleSearchValue =  { handleSearchValue }
       capital = { capital }
       handleSubmit = { handleSubmit }
       submitted = {submitted }
     />
    <Main 
       capital = { capital }
       handleSubmit = { handleSubmit }
       submitted = { submitted }
       handleLoading = { setLoading }
       loading = { loading }
     />  
   </div>
  );
}

export default App;
