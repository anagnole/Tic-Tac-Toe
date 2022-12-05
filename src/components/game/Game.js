import React, { useContext } from 'react';

import { Board } from "components";

import { AppContext } from 'app';

import './game.css';

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
    jumpTo(move);
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

const GameContainer = () => { 
  const {
    reverse,
    jumpTo, 
    history,
    reverseList,
    xIsNext,
    winner,
  } = useContext(AppContext);
  const props = useContext(AppContext);
  
  return <Game 
    reverse={reverse}
    jumpTo={jumpTo} 
    history={history}
    reverseList={reverseList}
    xIsNext={xIsNext}
    winner={winner}
  />;
}

export default GameContainer;