import React, { useReducer } from 'react';

import {
  play as playAction,
  jumpTo as jumpToAction,
  reverse as reverseAction,
  initState,
  reducer,
} from 'models/tic-tac-toe';

const GameContainer = ({ Component }) => {

  const [state, dispatch] = useReducer( reducer, initState );

  return <Component  
      play={i => dispatch(playAction({ i }))} 
      reverse={() => dispatch(reverseAction())}
      jumpTo={step => dispatch(jumpToAction({ step }))} 
      history={state.history}
      stepNumber={state.stepNumber}
      reverseList={state.reverseList}
      xIsNext={state.xIsNext}
  />;
}
  
export default GameContainer;