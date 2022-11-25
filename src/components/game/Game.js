import React from 'react';

import './game.css';

import calculateWinner from 'libraries/tic-tac-toe';

import {
    Board,
} from "components";

export const Squares = React.createContext();

const Game = ({
  reverse,
  jumpTo, 
  history,
  stepNumber,
  reverseList,
  xIsNext,
}) => {
  const squares = history[stepNumber].squares;
  const winner = calculateWinner(squares);

  const findRowCol = (move) => {
    return history[move].squares.findIndex((elem , index) => elem != history[move - 1].squares[index]);
  }

  const bold = (move) => {
    document.getElementById(move).style.fontWeight = "bold";
    jumpTo(move);
    for(let elem = 0; elem <= history.length - 1; elem++){
        if(elem != move) document.getElementById(elem).style.fontWeight = "normal";
    };
  }

  const moves = history.map((step, move) => {
    move = reverseList ? history.length - 1 - move : move;
    const desc = move ?
      'Go to move #' + move + " Move: " + findRowCol(move) :
      'Go to game start';
      
    return (
    <li key={ move }> 
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
        <Squares.Provider value={squares}>
          <Board/>
        </Squares.Provider>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={reverse}>Reverse List</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
  

  export default Game;