//import connect from 'libraries/models/connect';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { play } from 'components/game/gameSlice';

// import {
//   historySelector,
//   squaresSelector,
//   stepNumberSelector
// } from 'models/tic-tac-toe/selectors';

// import {
//   play
// } from 'models/tic-tac-toe/actions';

import './square.css';

const Square = ({ index }) => {
  const dispatch = useDispatch();
  const historySelector = state => state.game.history;
  const stepNumberSelector = state => state.game.stepNumber;
  const state = useSelector(state => state);
 
  const squares = historySelector(state)[stepNumberSelector(state)].squares;

  return (
  <button className="square" onClick={() => {dispatch(play({i: index}))
  }}>
    {squares[index]}
  </button>
  );
};

export default Square;

// export default connect(Square)({
//     squares,
//   },
//   {
//     play,
// });