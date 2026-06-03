import React, { useState } from 'react';

const blocks = ['A', 'B', 'C'];
const goal = ['A', 'B', 'C'];

function Game() {
  const [arranged, setArranged] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const addBlock = (block: string) => {
    setArranged([...arranged, block]);
  };

  const checkAnswer = () => {
    if (JSON.stringify(arranged) === JSON.stringify(goal)) {
      setMessage('Congratulations! Correct order!');
    } else {
      setMessage('Try Again!');
    }
  };

  const reset = () => {
    setArranged([]);
    setMessage('');
  };

  return (
    <div>
      <h1>Block Game</h1>
      <p>Arrange blocks in order: A, B, C</p>
      
      <div>
        <h3>Click blocks to arrange:</h3>
        {blocks.map((block) => (
          <button key={block} onClick={() => addBlock(block)}>
            {block}
          </button>
        ))}
      </div>

      <div>
        <h3>Your arrangement: {arranged.join(', ')}</h3>
      </div>

      <button onClick={checkAnswer}>Check Answer</button>
      <button onClick={reset}>Reset</button>

      <p>{message}</p>
    </div>
  );
}

export default Game;