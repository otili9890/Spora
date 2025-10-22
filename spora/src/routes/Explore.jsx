import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firestore';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const testUserProfiles = [
  { id: 1, name: 'Jane Simpson' },
  { id: 2, name: 'Eliza Cleary' },
  { id: 3, name: 'Sam Wednesday' },
];

const testMarkers = [
  {
    geocode: [-27.465894066327433, 153.04538787089527],
    popUp: 'Newfarm'
  },
  {
    geocode: [-27.47571779467023, 153.039508468977],
    popUp: 'Kangaroo Point'
  },
]

function Explore() {
  const [count, setCount] = useState(0);
  const [userProfiles, setUserProfiles] = useState([{}]);
  const [isAdding, setIsAdding] = useState(false);
  const coords = [-27.4679, 153.0281]; // Brisbane lat, long

  

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
            <Link to={`/explore/${profile.id}`}><h2>{profile.username}</h2></Link>
          </li>
        ))}
        <h1>Map</h1>
        <MapContainer center={coords} zoom={13}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {testMarkers.map((marker) => (
            <Marker position={marker.geocode}>
              <Popup>
                {marker.popUp}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}

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
