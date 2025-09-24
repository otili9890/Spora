import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from './Dashboard';

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userProfiles, setUserProfiles] = useState([{}]);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="small-container">
        <h1>Home</h1>
        <Register 
            profiles={userProfiles}
            setProfiles={setUserProfiles}
            setIsAdding={setIsAdding}
          />
        {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <>
          {/* <Login setIsAuthenticated={setIsAuthenticated} /> */}
          
        </>
      )}
        </div>
  );
};

export default Home;