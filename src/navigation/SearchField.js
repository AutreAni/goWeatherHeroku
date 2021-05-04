import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import Matchlist from '../matchList/Matchlist';



const SearchField = ({ 
    searchValue,
    handleSearchValue,
    match,
    handleSubmit,
    submitted }) => {

    const handleInputValue = (e) => {
        handleSearchValue(e.target.value);
    }


   const handleOnSubmit = e => {
       e.preventDefault();
       if(!searchValue) return;
       handleSubmit(searchValue);
   }
    
    return (
        <form className ="search-form"
        onSubmit = { handleOnSubmit }>
          <input 
          onChange = { handleInputValue }
          type = "text"
          name = "search"
          value = { searchValue }
          placeholder = "Search location"></input>  
          <FontAwesomeIcon className = "icon"
          icon = { faSearch }
          onClick ={ handleOnSubmit }
          />
          {/* {match.length && !submitted ?
           <Matchlist list = { match}
            handleSubmit = { handleSubmit }
           />: null} */}
        </form>
    )
}

export default SearchField
