import React, { useState } from 'react';

import calculateWinner from 'libraries/tic-tac-toe';

const GameContainer = ({ Component }) => {

      const [state, setState] = useState(
        {
          history: [
            {
              squares: Array(9).fill(null)
            }
          ],
          stepNumber: 0,
          xIsNext: true,
          reverseList : false
      }
    );
  
    const play = (i) => {
      
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = state.xIsNext ? "X" : "O";

      setState(
        {
          history: history.concat(
            [
              {
              squares: squares,   
              }         
            ]
          ),
          stepNumber : history.length,
          xIsNext : !state.xIsNext,
          reverseList: state.reverseList
        }
      );

    }
      
    const jumpTo = (step) => {
      setState(
        { 
          history : state.history,
          stepNumber : step,
          xIsNext : (step % 2) === 0,
          reverseList: state.reverseList
        }
      );
    }

    const reverse = () => setState(
        {
            history : state.history,
            stepNumber: state.stepNumber,
            xIsNext: state.xIsNext,
            reverseList : !state.reverseList
        }
    );

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