import {
    play,
    jumpTo,
    reverse,
} from './actions';

import calculateWinner from 'libraries/tic-tac-toe';

const playPayload = (state, { i }) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  
  if (calculateWinner(squares) || squares[i]) {
    return state;
  }
  squares[i] = state.xIsNext ? "X" : "O";
  const xIsNext = !state.xIsNext;
    return {
      history: history.concat(
        [
          {
            squares,   
          }         
        ]
      ),
      stepNumber : history.length,
      xIsNext,
      reverseList: state.reverseList,
    };
  }
  
  const jumpToPayload = (state, { step }) => {
    return { 
      history: state.history,
      stepNumber : step,
      xIsNext : (step % 2) === 0,
      reverseList: state.reverseList,
    };
  }
  
  const reversePayload = ( state ) => {
    return {
      history : state.history,
      stepNumber: state.stepNumber,
      xIsNext: state.xIsNext,
      reverseList : !state.reverseList
    };
  }

const initState = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    reverseList : false,
};

const reducer = (state, { type, payload }) => {
    switch (type) {
      case play.type:
        return playPayload(state, payload);
      case jumpTo.type:
        return jumpToPayload(state, payload);
      case reverse.type:
       return reversePayload(state);
      default:
        return state;
    }
};

export {
    initState,
    reducer,
};