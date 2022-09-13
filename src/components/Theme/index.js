import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import './style.scss';

function Theme() {
    const selectedTheme = useSelector((state) => state.dark);
    const dispatch = useDispatch();
    const selectTheme = () => {
        dispatch({
            type: 'SELECT_THEME',
            selectedTheme: !selectedTheme,
        })
    };
  return (    
    <>
    <div className='theme'>
        <button 
            type="button"
            className={classNames({ 'theme-selected': selectedTheme }, { 'theme-noSelected': !selectedTheme })} 
            onClick={selectTheme}
            >
            Light
        </button>
        <button 
            type="button" 
            className={classNames({ 'theme-selected': !selectedTheme }, { 'theme-noSelected': selectedTheme })} 
            onClick={selectTheme}
            >
            Dark
        </button>
    </div>
</>    
  );
}

export default Theme;