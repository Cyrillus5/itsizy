import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

function Results({getName, getUrl, getDescription}) {
  return (
    <div className='results'>
        <a href={getUrl} target="_blank" rel="noreferrer" title={getName} className='results-a'>
        <ul className='results-ul'>
            <li className='results-title'>{getName}</li>
            <li className='results-url'>{getUrl}</li>
            <li className='results-description'>{getDescription}</li>
        </ul>  
        </a>
        
    </div>
  );
}

Results.propTypes = {
  getName: PropTypes.string.isRequired,
  getUrl: PropTypes.string.isRequired,
  getDescription: PropTypes.string.isRequired,
  };

export default Results;