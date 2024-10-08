// Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for Home styles

function Home() {
  return (
    <div className="home-container">
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
        {/* Add a click handler to start exploring if needed */}
        <button onClick={() => alert('Explore feature is not yet implemented!')}>Start Exploring</button>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Dating App. All Rights Reserved.</p>
        <p>
          <a href="#">About Us</a> | <a href="#">Contact</a> | <a href="#">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
