import React, { useReducer } from 'react';

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

export const Context = React.createContext();

const GameContainer = ({ Component }) => {

  const [state, dispatch] = useReducer( reducer, initState );

  return(
  <Context.Provider value={i => dispatch(playAction({ i }))}>
    <Component  
        reverse={() => dispatch(reverseAction())}
        jumpTo={step => dispatch(jumpToAction({ step }))} 
        history={history(state)}
        stepNumber={stepNumber(state)}
        reverseList={reverseList(state)}
        xIsNext={xIsNext(state)}
    />
  </Context.Provider>
  )
}
 

export default GameContainer;
