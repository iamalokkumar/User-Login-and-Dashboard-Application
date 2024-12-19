import React, { useState } from 'react';
import styles from '../Style';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (username === 'admin' && password === 'admin') {
      handleLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{textAlign:"center"}}>
      <h2 style={styles.global.h2}>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.loginContainer}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.loginContainer}
      />
      <button onClick={login} style={styles.global.button}>Login</button>
    </div>
  );
};

export default LoginPage;