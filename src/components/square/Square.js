import React from 'react';

import './square.css';

const Square = ({ play, value}) => (
  <button className="square" onClick={play}>
    {value}
  </button>
);

export default Square;
