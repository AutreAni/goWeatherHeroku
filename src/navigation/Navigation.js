import React from 'react';
import Logo from './Logo';
import SearchField from './SearchField';
import '../css-modules/navigation/styles.css';

const Navigation = ({  
    capital, 
    match, 
    handleSubmit,
    submitted,
    searchValue,
    handleSearchValue
     }) => {
    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation__wrapper">
                    <Logo />
                    <SearchField
                     capital = { capital }                    
                     match =  { match }
                     handleSubmit =  { handleSubmit }
                     submitted = { submitted }
                     searchValue = { searchValue }
                     handleSearchValue = { handleSearchValue }
                     />
                </div>
            </div>
        </div>
    )
}

export default Navigation;
