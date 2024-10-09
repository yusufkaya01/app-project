import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login'; // Import the Login component
import Home from './Home'; // Import the Home component
import EditProfile from './EditProfile'; // Import the EditProfile component
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firestore functions

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState(null); // Initialize userData state
  const firestore = getFirestore(); // Initialize Firestore

  // Log the states for debugging
  console.log('User:', user);
  console.log('Loading:', loading);
  console.log('Error:', error);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Fetch user data from Firestore when the user is authenticated
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(firestore, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log('No such document!');
        }
      } else {
        setUserData(null); // Reset user data if no user is authenticated
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, [user, firestore]); // Add firestore as a dependency

  // Handle loading and error states outside of the hooks
  if (loading) {
    return <LoadingSpinner />;
  }

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

        <AppRoutes user={user} userData={userData} />
      </div>
    </Router>
  );
}

function AppRoutes({ user, userData }) {
  const navigate = useNavigate();

  // Redirect user based on authentication status
  useEffect(() => {
    if (user) {
      navigate('/home'); // Redirect to home if user is logged in
    } else {
      navigate('/'); // Redirect to login if user is not logged in
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/" element={user ? <Home userData={userData} /> : <Login />} />
      <Route path="/home" element={user ? <Home userData={userData} /> : <Login />} />
      <Route path="/edit-profile" element={user ? <EditProfile userData={userData} /> : <Login />} />
    </Routes>
  );
}

export default App;
