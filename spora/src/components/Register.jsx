import React, { useState } from 'react';
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import { db } from '../config/firestore';
import Swal from 'sweetalert2';

// await setDoc(doc(db, "userProfiles", "new-city-id"), data);
// import Swal from 'sweetalert2';

const Register = ({ profiles, setProfiles, setIsAdding }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skillShare, setSkillShare] = useState('');
  const [skillLearn, setSkillLearn] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');


  const handleAdd = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !skillShare || !skillLearn || !bio) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newProfile = {
      username,
      email,
      password,
      skillShare,
      skillLearn,
      location,
      bio
    };

    profiles.push(newProfile);

    try {
      // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "userProfiles"), {
      ...newProfile
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    setProfiles(profiles);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${username}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Register</h1>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        /><br></br>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br></br>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br></br>
         {/* <input
          id="date"
          type="text hidden"
          name="date"
          value={Date().toString()}
        /> */}
        <label htmlFor="skillShare">Skills You'd Like to Share (Please separate with a comma)</label> 
        <input
          id="skillShare"
          type="text"
          name="skillShare"
          value={skillShare}
          onChange={e => setSkillShare(e.target.value)}
        /><br></br>
        <label htmlFor="skillLearn">Skills You'd Like to Learn (Please separate with a comma)</label>
        <input
          id="skillLearn"
          type="text"
          name="skillLearn"
          value={skillLearn}
          onChange={e => setSkillLearn(e.target.value)}
        /><br></br>
        <label htmlFor="location">Which suburb are you located? (Or where would you like to interact with others?)</label>
        <input
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        /><br></br>
        <label htmlFor="bio">Please share your bio</label>
        <input
          id="bio"
          type="text"
          name="bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;