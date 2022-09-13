import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'react-feather';
import './style.scss';

function SearchBar() {
  const getResult = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const recordSearchTerm = (event) =>{
    let recordTerm = event.target.value;
    dispatch({
      type: 'RECORD_TERMSEARCH',
      recordterm: recordTerm,
    });
  }
  const launchSearch =(event) =>{
    event.preventDefault();    
    dispatch({
      type: 'GET_SEARCH',
    });
  }
  return (
    <div 
    className={classNames({'SearchBar': !getResult}, {'withResult':getResult})}   
    >
      <form        
        className={classNames({'SearchBar-form': !getResult}, {'withResult-form':getResult})}
        onSubmit={launchSearch}          
      >
        <input
          className={classNames({'SearchBar-input': !getResult}, {'withResult-input':getResult})} 
          type='text'
          aria-label="Termes à rechercher"
          placeholder="Cherchez votre bonheur ... "
          onChange={recordSearchTerm}
        />        
        <button 
          className={classNames({'SearchBar-button': !getResult}, {'withResult-button':getResult})} 
          type='submit' 
        > 
          <Search 
            className={classNames({'SearchBar-button-icon': !getResult}, {'withResult-button-icon':getResult})}
            size={25} 
            padding-right="10rem" 
            
          />          
        </button>        
      </form>
    </div>    
  );
}

export default SearchBar;