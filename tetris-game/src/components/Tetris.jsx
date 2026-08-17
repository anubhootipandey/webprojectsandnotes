import React, { useState, useEffect, useCallback } from 'react';
import Board from './Board';
import '../App.css';

const BLOCK_SIZE = 30;
const ROWS = 20;
const COLS = 10;

const Tetris = () => {
  const [board, setBoard] = useState([]);
  const [currentBlock, setCurrentBlock] = useState([]);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(''));
    setBoard(initialBoard);
    spawnBlock();
  }, []);

  const spawnBlock = () => {
    // Generate a random block
    const block = [
      ['#FF0000', '#FF0000'],
      ['#FF0000', '#FF0000'],
    ];
    setCurrentBlock(block);
    setCurrentPosition({ x: Math.floor(COLS / 2) - 1, y: 0 });
  };

  const moveBlock = useCallback(
    (dx, dy) => {
      setCurrentPosition((prevPosition) => {
        const newPosition = { x: prevPosition.x + dx, y: prevPosition.y + dy };
        if (!isValidPosition(currentBlock, newPosition)) return prevPosition;
        return newPosition;
      });
    },
    [currentBlock]
  );

  const isValidPosition = (block, position) => {
    for (let y = 0; y < block.length; y++) {
      for (let x = 0; x < block[y].length; x++) {
        if (
          block[y][x] &&
          (position.y + y < 0 ||
            position.x + x < 0 ||
            position.x + x >= COLS ||
            position.y + y >= ROWS ||
            board[position.y + y][position.x + x])
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const dropBlock = () => {
    let newY = currentPosition.y + 1;
    while (isValidPosition(currentBlock, { x: currentPosition.x, y: newY })) {
      newY++;
    }
    setCurrentPosition((prevPosition) => ({
      ...prevPosition,
      y: newY - 1,
    }));
  };

  const rotateBlock = () => {
    const rotatedBlock = currentBlock[0].map((_, index) =>
      currentBlock.map((row) => row[index]).reverse()
    );
    if (isValidPosition(rotatedBlock, currentPosition)) {
      setCurrentBlock(rotatedBlock);
    }
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        moveBlock(-1, 0);
        break;
      case 'ArrowRight':
        moveBlock(1, 0);
        break;
      case 'ArrowDown':
        moveBlock(0, 1);
        break;
      case 'ArrowUp':
        rotateBlock();
        break;
      case ' ': // Spacebar
        dropBlock();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveBlock(0, 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [moveBlock]);

  return (
    <div className="tetris" onKeyDown={handleKeyDown} tabIndex="0">
      <h1>Tetris</h1>
      <Board board={board} currentBlock={currentBlock} currentPosition={currentPosition} />
    </div>
  );
};

export default Tetris;
