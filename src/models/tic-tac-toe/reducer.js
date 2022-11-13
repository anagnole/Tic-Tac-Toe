import {
    play,
    jumpTo,
    reverse,
} from './actions';

const playPayload = ({ history, squares, xIsNext }) => {
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
        return playPayload(payload);
      case jumpTo.type:
        return jumpToPayload(payload);
      case reverse.type:
       return reversePayload(payload);
      default:
        return state;
    }
};

export {
    initState,
    reducer,
};