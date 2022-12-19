// import React, { useContext } from 'react';
// import { AppContext } from 'app';
import Container from 'libraries/models/Container';

import {
  squares
} from 'models/tic-tac-toe/selectors';

import {
  play
} from 'models/tic-tac-toe/actions';

import './square.css';

const Square = ({ squares, play, index }) => {
  return (
  <button className="square" onClick={() => {play({i: index})}}>
    {squares[index]}
  </button>
  );
};

// const SquareContainer = ({ index }) => {
//   const {
//     play,
//     squares,
//    } = useContext(AppContext);

//   return (
//     <Square index={index} play={play} value={squares[index]}/>
//   );
// };

const stateProps = {
  squares,
}
const actionProps = {
  play,
}

export default (index) => <Container 
component={Square} 
actionProps={actionProps} 
stateProps={stateProps} 
props={index}
/>;

