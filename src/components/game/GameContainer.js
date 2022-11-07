import React, { useReducer } from 'react';

import calculateWinner from 'libraries/tic-tac-toe';

const reducer = (state, action) => {
  switch(action.type){
    case "play":
      return playPayload(action.payload);
    case "jumpTo":
      return jumpToPayload(action.payload);
    case "reverse":
     return reversePayload(action.payload);
    default:
      return state
  }
}

const initState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true,
  reverseList : false
}

const playPayload = ({ history, squares, xIsNext }) => {
  return {
    history: history.concat(
      [
        {
          squares: squares,   
        }         
      ]
    ),
    stepNumber : history.length,
    xIsNext : xIsNext,
  };
}

const jumpToPayload = ({ history, step }) => {
  return { 
    history: history,
    stepNumber : step,
    xIsNext : (step % 2) === 0,
  };
}

const reversePayload = ({ state }) => {
  return {
    history : state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    reverseList : !state.reverseList
  };
}

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
   dispatch({ type: "play", payload: {
        history: history,
        squares: squares,
        xIsNext: xIsNext
        }
      }
    )
  }
    
  const jumpTo = (step) => {
    dispatch({ type: "jumpTo", payload: {
        history: state.history,
        step: step
        }
      }
    )
  }

  const reverse = () => {
    dispatch({ type: "reverse" , payload: { state: state }})
  }

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