import { useState } from 'react'
import { Link } from 'react-router-dom'


function Explore() {
  const [count, setCount] = useState(0)

  const profiles = [
    { id: 1, name: 'Jane Simpson' },
    { id: 2, name: 'Eliza Cleary' },
    { id: 3, name: 'Sam Wednesday' },
  ];

  return (
    <>
      <h1>Explore</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Link to={`/explore/${profile.id}`}><h2>{profile.name}</h2></Link>
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
