import React from 'react';
import Astronomy from '../Astronomy/Astronomy';

const MainPage = ({ handleClick }) => {
  return (
    <>
        <h5>Click below to see the fact!</h5>
        <button onClick={() => handleClick()}>See daily Fact</button>
    </>
  )
}

export default MainPage;