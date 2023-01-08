import React from 'react';

import { Board } from 'components';

import connect from 'libraries/models/connect';

import './game.css';

import {
  reverse,
  jumpTo,
 } from 'models/tic-tac-toe/actions';

import {
  history,
  reverseList,
  xIsNext,
  winner,
} from 'models/tic-tac-toe/selectors';

const Game = ({
  reverse,
  jumpTo, 
  history,
  reverseList,
  xIsNext,
  winner,
}) => {

  const findRowCol = (move) => {
    return history[move].squares.findIndex((elem , index) => elem !== history[move - 1].squares[index]);
  }

  const bold = (move) => {
    document.getElementById(move).style.fontWeight = "bold";
    jumpTo({step: move});
    for(let elem = 0; elem <= history.length - 1; elem++){
      if(elem !== move) document.getElementById(elem).style.fontWeight = "normal";
    };
  }

  const moves = history.map((step, move) => {
    move = reverseList ? history.length - 1 - move : move;
    const desc = move ?
      'Go to move #' + move + " Move: " + findRowCol(move) :
      'Go to game start';
      
    return (
    <li key={ move } className="moveList"> 
        <button onClick= {() => { bold(move) } } id = {move}> {desc} </button> 
    </li>
    );
  });

  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="game">
      <div className="game-board">
          <Board/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={reverse}>Reverse List</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default connect(Game)({
    history,
    reverseList,
    xIsNext,
    winner,
  },
  {
    reverse,
    jumpTo,
});