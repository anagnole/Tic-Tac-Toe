import React, { useContext } from 'react';
import { AppContext } from 'app';
import './square.css';

const Square = ({ index, value, play }) => {
  return (
  <button className="square" onClick={() => {play(index)}}>
    {value}
  </button>
  );
};

const SquareContainer = ({ index }) => {
  const {
    play,
    squares,
   } = useContext(AppContext);

  return (
    <Square index={index} play={play} value={squares[index]}/>
  );
};

export default SquareContainer;
