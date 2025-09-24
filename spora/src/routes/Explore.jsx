import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firestore';

const testUserProfiles = [
  { id: 1, name: 'Jane Simpson' },
  { id: 2, name: 'Eliza Cleary' },
  { id: 3, name: 'Sam Wednesday' },
];

function Explore() {
  const [count, setCount] = useState(0);
  const [userProfiles, setUserProfiles] = useState([{}]);
  const [isAdding, setIsAdding] = useState(false);

  

  const getProfiles = async () => {
    const querySnapshot = await getDocs(collection(db, "userProfiles"))
    const profiles = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setUserProfiles(profiles)
  }

  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <>
      <h1>Explore</h1>
      <ul>
        {userProfiles.map((profile) => (
          <li key={profile.id}>
            <Link to={`/explore/${profile.id}`}><h2>{profile.userName}</h2></Link>
          </li>
        ))}
      </ul>

      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Explore
