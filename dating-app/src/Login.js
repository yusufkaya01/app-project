import React, { useState } from 'react';
import { auth } from './firebaseConfig'; // Import the Firebase config
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
    } catch (error) {
      console.error('Login error:', error);
      alert(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegistering ? (
          <span>Already have an account? <button onClick={() => setIsRegistering(false)}>Login</button></span>
        ) : (
          <span>Don't have an account? <button onClick={() => setIsRegistering(true)}>Register</button></span>
        )}
      </p>
    </div>
  );
}

export default Login;


const [error, setError] = useState('');

const handleLogin = async (e) => {
  e.preventDefault();
  setError(''); // Clear previous errors
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Logged in successfully!');
  } catch (error) {
    console.error('Login error:', error);
    setError(error.message); // Set error message to state
  }
};

const handleRegister = async (e) => {
  e.preventDefault();
  setError(''); // Clear previous errors
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert('Account created successfully!');
  } catch (error) {
    console.error('Registration error:', error);
    setError(error.message); // Set error message to state
  }
};

// In the return statement:
{error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
