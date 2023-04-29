import {
    playSucceed,
    jumpToSucceed,
    reverseSucceed,
} from './actions';

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
      case playSucceed.type:
        return {
          ...state,
          ...payload
        };
       
      case jumpToSucceed.type:
        return {
          ...state,
          ...payload
        };

      case reverseSucceed.type:
        return {
          ...state,
          ...payload
        };
        
      default:
        return state;
    }
};

export {
    initState,
    reducer,
};