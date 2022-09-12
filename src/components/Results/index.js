// import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

function Results({getName, getUrl, getDescription}) {
  return (
    <div className='results'>
        <a href={getUrl} target="_blank" rel="noreferrer" title={getName}>
        <ul className='results-ul'>
            <li className='results-title'>{getName}</li>
            <li className='results-url'>{getUrl}</li>
            <li className='results-description'>{getDescription}</li>
        </ul>  
        </a>
        
    </div>
  );
}

// Search.propTypes = {
//   };

export default Results;