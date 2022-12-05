import React from 'react';

import './board.css';

import { SquareContainer } from 'components';

const Board = () => {

   const renderSquares = (index) => (
        <div className = 'board-row' key={index}>
            {
                Array(3).fill(null).map((_, i ) => 
                    {
                        return <SquareContainer
                            index={i+ index * 3}
                            key={i + index * 3}
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