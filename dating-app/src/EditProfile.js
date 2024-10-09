// EditProfile.js
import React, { useState } from 'react';
import './EditProfile.css';

const petOptions = [
  'Dog',
  'Cat',
  'Bird',
  'Rabbit',
  'Fish',
  'Reptile',
  'Hamster',
];

const bodyTypeOptions = [
  'Slim',
  'Athletic',
  'Average',
  'Curvy',
  'Full-figured',
];

const relationshipGoals = [
  'Friendship',
  'Casual Dating',
  'Serious Relationship',
  'Marriage',
  'Open Relationship',
];

function EditProfile() {
  // Step 1: Initialize state for user details
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState(''); // Location state
  const [aboutMe, setAboutMe] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [languages, setLanguages] = useState('');
  const [relationshipGoal, setRelationshipGoal] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [pets, setPets] = useState([]);
  const [smoking, setSmoking] = useState(false);
  const [drinking, setDrinking] = useState(false);
  const [bodyType, setBodyType] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  // Step 2: Define the handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save the profile information
    console.log('Updated Profile:', {
      name,
      age,
      location,
      aboutMe,
      height,
      weight,
      languages,
      relationshipGoal,
      birthdate,
      horoscope,
      pets,
      smoking,
      drinking,
      bodyType,
      profilePicture,
    });
  };

  // Step 3: Function to handle pet selection
  const handlePetChange = (pet) => {
    setPets((prevPets) =>
      prevPets.includes(pet) ? prevPets.filter((p) => p !== pet) : [...prevPets, pet]
    );
  };

  // Step 4: Function to calculate horoscope based on birthdate
  const calculateHoroscope = (date) => {
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    // Basic horoscope calculation based on birthdate
    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) return 'Aquarius';
    if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) return 'Pisces';
    if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) return 'Aries';
    if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) return 'Taurus';
    if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) return 'Gemini';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) return 'Cancer';
    if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) return 'Leo';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Virgo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Libra';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) return 'Scorpio';
    if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) return 'Sagittarius';
    return 'Capricorn';
  };

  // Step 5: Update horoscope when birthdate changes
  const handleBirthdateChange = (e) => {
    const date = e.target.value;
    setBirthdate(date);
    setHoroscope(calculateHoroscope(date));
  };

  return (
    <div className="edit-profile-container">
      <h3>Edit Your Profile</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profile-picture">Change Profile Picture:</label>
          <input
            type="file"
            id="profile-picture"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // Fixed to use state for location
            required
          />
        </div>
        <div>
          <label htmlFor="about-me">About Me:</label>
          <textarea
            id="about-me"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="languages">Languages I Speak:</label>
          <input
            type="text"
            id="languages"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            placeholder="e.g., English, Turkish"
            required
          />
        </div>
        <div>
          <label htmlFor="relationship-goal">Relationship Goal:</label>
          <select
            id="relationship-goal"
            value={relationshipGoal}
            onChange={(e) => setRelationshipGoal(e.target.value)}
            required
          >
            <option value="">Select...</option>
            {relationshipGoals.map((goal) => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
            required
          />
        </div>
        <div>
          <label>Horoscope:</label>
          <p>{horoscope}</p>
        </div>
        <div>
          <label>Pets:</label>
          {petOptions.map((pet) => (
            <div key={pet}>
              <input
                type="checkbox"
                id={pet}
                value={pet}
                checked={pets.includes(pet)}
                onChange={() => handlePetChange(pet)}
              />
              <label htmlFor={pet}>{pet}</label>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="smoking">Smoking:</label>
          <input
            type="checkbox"
            id="smoking"
            checked={smoking}
            onChange={() => setSmoking(!smoking)}
          />
        </div>
        <div>
          <label htmlFor="drinking">Drinking:</label>
          <input
            type="checkbox"
            id="drinking"
            checked={drinking}
            onChange={() => setDrinking(!drinking)}
          />
        </div>
        <div>
          <label htmlFor="body-type">Body Type:</label>
          <select
            id="body-type"
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            required
          >
            <option value="">Select...</option>
            {bodyTypeOptions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
