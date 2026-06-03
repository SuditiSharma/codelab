import React, { useState } from 'react';

const questions = [
  { question: '2 + 2 = ?', answer: '4' },
  { question: '5 - 3 = ?', answer: '2' },
  { question: '3 x 3 = ?', answer: '9' },
  { question: '10 / 2 = ?', answer: '5' },
];

function MathGame() {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    if (input === questions[current].answer) {
      setMessage('Correct!');
      setScore(score + 1);
    } else {
      setMessage('Wrong! Try again');
    }
  };

  const nextQuestion = () => {
    setInput('');
    setMessage('');
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return (
      <div>
        <h1>Game Over!</h1>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Math Game</h1>
      <p>Score: {score}</p>
      <h2>{questions[current].question}</h2>
      <input
        value={input}
        placeholder="Your answer"
        onChange={(e) => setInput(e.target.value)}
      />
      <br/><br/>
      <button onClick={checkAnswer}>Check</button>
      <button onClick={nextQuestion}>Next</button>
      <p>{message}</p>
    </div>
  );
}

export default MathGame;
      