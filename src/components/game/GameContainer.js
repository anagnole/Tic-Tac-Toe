import React, { useReducer } from 'react';

import calculateWinner from 'libraries/tic-tac-toe';

import {
  play as playAction,
  jumpTo as jumpToAction,
  reverse as reverseAction,
} from 'models/tic-tac-toe';

import {
  initState,
  reducer,
} from 'models/tic-tac-toe';

const GameContainer = ({ Component }) => {

  const [state, dispatch] = useReducer( reducer, initState );

  const play = (i) => {
    
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    const xIsNext = !state.xIsNext;
    dispatch(playAction({
      history,
      squares,
      xIsNext,
    }));
  };
    
  const jumpTo = (step) => {
    dispatch(jumpToAction({
      history: state.history,
      step,
     }));
  };

  const reverse = () => {
    dispatch(reverseAction({ state }));
  };

  return <Component  
      play={play} 
      reverse={reverse}
      jumpTo={jumpTo} 
      history={state.history}
      stepNumber={state.stepNumber}
      reverseList={state.reverseList}
      xIsNext={state.xIsNext}
  />;
}
  
export default GameContainer;