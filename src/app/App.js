import React, { useReducer } from 'react';

import Game from 'components/game';

import { AppProvider } from './';

import calculateWinner from 'libraries/tic-tac-toe';

import {
  play as playAction,
  jumpTo as jumpToAction,
  reverse as reverseAction,
  initState,
  reducer,
  history,
  stepNumber,
  reverseList,
  xIsNext,
  squares as squareSelector,
} from 'models/tic-tac-toe';

const App = () => {
  const [state, dispatch] = useReducer( reducer, initState );

  const play = payload => dispatch(playAction(payload));
  const reverse = () => dispatch(reverseAction());
  const jumpTo = payload => dispatch(jumpToAction(payload));
  const squares = squareSelector(state);
  const winner = calculateWinner(squares);
  

  return (
    <AppProvider value={{
      play,
      reverse,
      jumpTo,
      history:history(state),
      stepNumber: stepNumber(state),
      reverseList: reverseList(state),
      xIsNext: xIsNext(state),
      squares,
      winner,
    }}>
      <Game/>
    </AppProvider>
  );
}
 
export default App;

