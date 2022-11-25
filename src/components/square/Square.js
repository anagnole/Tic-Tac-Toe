import React, { useContext } from 'react';
import {Context, Squares} from 'components/game';
import './square.css';

const Square = ({ index }) => {
  const play = useContext(Context);
  const squares = useContext(Squares);
  return (
  <button className="square" onClick={() => {play(index)}}>
    {squares[index]}
  </button>
  );
};

export default Square;
