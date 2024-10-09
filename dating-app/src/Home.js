// Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for Home styles
import logo from './FellowshipFinders.png'; // Step 1: Import the logo image
import { Link } from 'react-router-dom'; // Import Link for navigation

function Home() {
  // Step 2: Define the handleClick function
  const handleClick = () => {
    // Perform some action or navigate to another page
    console.log("Button clicked!");
  };

  return (
    <div className="home-container">
      {/* Step 3: Add the logo at the top of the home page */}
      <img src={logo} alt="Fellowship Finders Logo" className="app-logo" />

      {/* Main heading for the Home page */}
      <h2>This is the Home Page</h2>
      <p>Welcome to the dating app!</p>

      {/* User Profile Section */}
      <section className="user-profile">
        <h3>Your Profile</h3>
        {/* Profile details; these can be dynamic in the future */}
        <p>Name: Jane Doe</p>
        <p>Age: 28</p>
        <p>Location: New York</p>
      </section>

      {/* Featured Matches Section */}
      <section className="featured-matches">
        <h3>Featured Matches</h3>
        <div className="matches">
          {/* Each match is represented as a card */}
          <div className="match-card">
            <h4>John Smith</h4>
            <p>Age: 30</p>
            <p>Location: San Francisco</p>
          </div>
          <div className="match-card">
            <h4>Emily Johnson</h4>
            <p>Age: 27</p>
            <p>Location: Los Angeles</p>
          </div>
          <div className="match-card">
            <h4>Michael Brown</h4>
            <p>Age: 32</p>
            <p>Location: Chicago</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h3>Explore More Features!</h3>
        <p>Check out our messaging, matching, and search functionalities.</p>
        {/* Use handleClick to handle button actions */}
        <button onClick={handleClick}>Start Exploring</button>
        {/* Add a button to navigate to Edit Profile */}
        <Link to="/edit-profile">
          <button>Edit Profile</button> {/* Button to navigate to Edit Profile */}
        </Link>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Dating App. All Rights Reserved.</p>
        <p>
          {/* Using buttons instead of anchor tags for actions */}
          <button onClick={() => alert('About Us feature is not yet implemented!')}>About Us</button> | 
          <button onClick={() => alert('Contact feature is not yet implemented!')}>Contact</button> | 
          <button onClick={() => alert('Privacy Policy feature is not yet implemented!')}>Privacy Policy</button>
        </p>
      </footer>
    </div>
  );
}

export default Home;
