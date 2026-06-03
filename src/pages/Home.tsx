import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to CodeLab!</h1>
      <p>Choose a game to play:</p>
      <button onClick={() => navigate('/game')}>Block Game</button>
      <br/><br/>
      <button onClick={() => navigate('/math')}>Math Game</button>
      <br/><br/>
      <button onClick={() => navigate('/rushour')}>Rush Hour</button>
    </div>
  );
}

export default Home;