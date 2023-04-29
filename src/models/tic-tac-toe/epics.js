import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { play, playSucceed, jumpTo, jumpToSucceed, reverse, reverseSucceed } from "./actions";
import calculateWinner from 'libraries/tic-tac-toe';

const playEpic = (action$, state$) => action$.pipe(
    ofType(play.type),
    map(({payload: {i}}) => {
        const state = state$.value;
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
    
        if (calculateWinner(squares) || squares[i]) {
             return playSucceed({});  //empty object
        }
        squares[i] = state.xIsNext ? "X" : "O";
        const xIsNext = !state.xIsNext;
        return playSucceed({
            history: history.concat(
            [
                {
                squares,   
                }         
            ]
            ),
            stepNumber: history.length,
            xIsNext,
            reverseList: state.reverseList,
        });
        }  
    )
  );

  const reverseEpic = (action$, state$) => action$.pipe(
    ofType(reverse.type),
    map(() => {
        const state = state$.value;
        return reverseSucceed({
            history : state.history,
            stepNumber: state.stepNumber,
            xIsNext: state.xIsNext,
            reverseList : !state.reverseList
          });
        }
    )
  );

  const jumpToEpic = (action$, state$) => action$.pipe(
    ofType(jumpTo.type),
    map(({payload: {step}}) => {
        const state = state$.value;
        return jumpToSucceed({ 
            history: state.history,
            stepNumber : step,
            xIsNext : (step % 2) === 0,
            reverseList: state.reverseList,
          });
    }
        
    )
  );

  const rootEpic = combineEpics(
    playEpic,
    jumpToEpic,
    reverseEpic,
  );

export default rootEpic;