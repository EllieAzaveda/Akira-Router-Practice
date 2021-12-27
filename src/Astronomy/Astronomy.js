import React from 'react';
import './Astronomy.css';

const Astronomy = ({ dailyFact }) => {

    return (
      <>
        <div className='astronomy-card card'>
          <img data-cy='astronomy-image' className='astronomy-image' src={dailyFact.url} alt={`${dailyFact.title}`}/>
          <h3 data-cy='title' className='title'>..| {dailyFact.title} |..</h3>
          <h5 data-cy='explanation' className='explanation'>{dailyFact.explanation}</h5>
          <h5 data-cy='copyright'>Copyright: {dailyFact.copyright}</h5>
        </div>
      </>
    )
}

export default Astronomy;