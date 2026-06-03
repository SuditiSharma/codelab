import React, { useState } from 'react';

const GRID_SIZE = 6;

const initialGrid = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [2, 2, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

function RushHour() {
  const [grid] = useState(initialGrid);
  const [message, setMessage] = useState('');

  const handleClick = (row: number, col: number) => {
    if (grid[row][col] === 1) {
      if (col === GRID_SIZE - 1 || col === GRID_SIZE - 2) {
        setMessage('Congratulations! You freed the red car!');
      } else {
        setMessage('Move the red car to the right edge to win!');
      }
    }
  };

  const getColor = (val: number) => {
    if (val === 1) return 'red';
    if (val === 2) return 'yellow';
    return 'lightgray';
  };

  return (
    <div>
      <h1>Rush Hour</h1>
      <p>Click the red car and move it to the right to escape!</p>
      <div style={{ display: 'inline-block' }}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                onClick={() => handleClick(rowIndex, colIndex)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: getColor(cell),
                  border: '1px solid black',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <p>{message}</p>
    </div>
  );
}

export default RushHour;