import { useState } from 'react'
import { collection, getDocs } from "firebase/firestore"; 

function Dashboard() {
  const [count, setCount] = useState(0)

  

  const profileItems = [
    { id: 1, label: 'Name', value: 'John Doe' },
    { id: 2, label: 'Age', value: '35' },
    { id: 3, label: 'Email', value: 'john.doe@example.com' },
  ];

  return (
    <>
      <h1>Welcome to Your Dashboard</h1>
      <ul>
        {profileItems.map((item) => (
          <li key={item.id}>
            <strong>{item.label}:</strong> {item.value}
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

export default Dashboard
