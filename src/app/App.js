import React, { useReducer } from 'react';

import GameContainer from 'components/game';

import { Provider } from './';

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
} from 'models/tic-tac-toe';

const App = () => {
  const [state, dispatch] = useReducer( reducer, initState );

  const play = i => dispatch(playAction({ i }));
  const reverse = () => dispatch(reverseAction());
  const jumpTo = step => dispatch(jumpToAction({ step }));
  const squares = history(state)[stepNumber(state)].squares;
  const winner = calculateWinner(squares);
  
  return (
    <Provider value={{
      play,
      reverse,
      jumpTo,
      history:history(state),
      stepNumber: stepNumber(state),
      reverseList: reverseList(state),
      xIsNext: xIsNext(state),
      squares,
      winner,
    }}
    >
      <GameContainer/>

    </Provider>
  );
}
 
export default App;

