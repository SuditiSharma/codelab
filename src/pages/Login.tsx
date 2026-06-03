import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'suditi' && password === '1234') {
      navigate('/home');
    } else {
      alert('Wrong credentials');
    }
  };

  return (
    <div>
      <h1>CodeLab Login</h1>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <br/>
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;