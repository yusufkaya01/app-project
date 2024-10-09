import React, { useState } from 'react';
import EditProfile from './EditProfile'; // Adjust the path if necessary

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  // Dummy user data for demonstration purposes
  const userData = {
    name: 'John Doe',
    age: 30,
    location: 'New York',
    aboutMe: 'I love exploring new places and meeting new people.',
    height: 180,
    weight: 75,
    languages: 'English, Turkish',
    relationshipGoal: 'Serious Relationship',
    birthdate: '1993-05-12',
    horoscope: 'Taurus',
    pets: ['Dog'],
    smoking: false,
    drinking: true,
    bodyType: 'Athletic',
  };

  return (
    <div>
      <h1>Your Profile</h1>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>

      {isEditing ? (
        <EditProfile />
      ) : (
        <div>
          <h2>Profile Information</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Location:</strong> {userData.location}</p>
          <p><strong>About Me:</strong> {userData.aboutMe}</p>
          <p><strong>Height:</strong> {userData.height} cm</p>
          <p><strong>Weight:</strong> {userData.weight} kg</p>
          <p><strong>Languages I Speak:</strong> {userData.languages}</p>
          <p><strong>Relationship Goal:</strong> {userData.relationshipGoal}</p>
          <p><strong>Birthdate:</strong> {userData.birthdate}</p>
          <p><strong>Horoscope:</strong> {userData.horoscope}</p>
          <p><strong>Pets:</strong> {userData.pets.join(', ')}</p>
          <p><strong>Smoking:</strong> {userData.smoking ? 'Yes' : 'No'}</p>
          <p><strong>Drinking:</strong> {userData.drinking ? 'Yes' : 'No'}</p>
          <p><strong>Body Type:</strong> {userData.bodyType}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
