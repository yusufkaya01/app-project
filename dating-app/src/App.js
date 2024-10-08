import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login'; // Import the Login component
import Home from './Home'; // Import the Home component
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component

function App() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/home');
    } else if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // Handle any authentication errors
  if (error) {
    return <div className="error-message">{error.message}</div>;
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Dating App</h1>
          <p>Find your perfect match!</p>
          {user && <button onClick={handleLogout}>Logout</button>}
        </header>

        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/home" element={user ? <Home /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
