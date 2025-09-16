import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const [count, setCount] = useState(0)
  const {id} = useParams();

  return (
    <>
      <div>
        
      </div>
      <h1>Profile: {id}</h1>
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

export default Profile
