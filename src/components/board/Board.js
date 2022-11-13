import React from 'react';

import './board.css';

import {
    Square,
} from "components";

const Board = ({ squares , onClick }) => {

   const renderSquares = (index) => (
        <div className = 'board-row' key = { index }>
            {
                Array(3).fill(null).map((_, i ) => 
                    {
                        return <Square
                            key = {i + index * 3}
                            value={squares[i + index * 3]}
                            onClick={() => onClick(i + index * 3)}
                        />
                    }
                )
            }
        </div>
    );

    return (
        <div>
            { Array(3).fill(null).map( ( _, i) => renderSquares(i)) } 
        </div>
    );
  };

  export default Board;