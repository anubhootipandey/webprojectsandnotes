import React from 'react';
import Block from './Block';

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Block key={colIndex} color={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
