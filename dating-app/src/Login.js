import React, { useState } from 'react';
import { auth } from './firebaseConfig'; // Import Firebase config
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {
  // State variables to handle email, password, registration state, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(''); // Error state to display any login/register errors

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors before attempting login
    try {
      // Firebase auth function to log in the user
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message); // Set the error message to be displayed to the user
    }
  };

  // Function to handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors before attempting registration
    try {
      // Firebase auth function to register the user
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message); // Set the error message to be displayed to the user
    }
  };

  return (
    <div>
      {/* Title based on whether the user is registering or logging in */}
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      
      {/* Display the error message if one exists */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Form to handle login or register, depending on the current state */}
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          required
        />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>

      {/* Toggle between login and register */}
      <p>
        {isRegistering ? (
          <span>
            Already have an account?{' '}
            <button onClick={() => setIsRegistering(false)}>Login</button>
          </span>
        ) : (
          <span>
            Don't have an account?{' '}
            <button onClick={() => setIsRegistering(true)}>Register</button>
          </span>
        )}
      </p>
    </div>
  );
}

export default Login;
