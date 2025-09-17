import React, { useState } from 'react';
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import { db } from '../config/firestore';

// await setDoc(doc(db, "userProfiles", "new-city-id"), data);
// import Swal from 'sweetalert2';

const Register = ({ profiles, setProfiles, setIsAdding }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    // if (!userName || !email || !date) {
    //   return Swal.fire({
    //     icon: 'error',
    //     title: 'Error!',
    //     text: 'All fields are required.',
    //     showConfirmButton: true,
    //   });
    // }

    const newProfile = {
      userName,
      email,
      date,
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

    // Swal.fire({
    //   icon: 'success',
    //   title: 'Added!',
    //   text: `${userName}'s data has been Added.`,
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Register</h1>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          type="text"
          name="userName"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        /><br></br>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br></br>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        /><br></br>
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