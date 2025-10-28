import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firestore';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { LatLng } from 'leaflet';

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

  function Skills({ profile }) {
    if (!profile.skillShare && !profile.skillLearn) {
      return;
    } else {
      // if (profile.skillShare.length >= 0) {
        return (
          <div class="flex">
            {profile.skillShare ?
                <div class="w-1/2">
                <h2 class="underline">Sharing</h2>
                <p>{profile.skillShare}</p>
              {/* <ul>
                {profile.skillShare.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul> */}
              </div>
              : null
            }
            {profile.skillLearn ?
            <div class="w-1/2">
              <h2 class="underline">Seeking</h2>
              <p>{profile.skillLearn}</p>
              {/* <ul>
                {profile.skillLearn.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul> */}
            </div>
            : null
            }
          
          </div>
        )}
  }

  function Markers(profile) {
    try {
      if (profile.location.latitude && profile.location.longitude) {
        return (
          <Marker position={new LatLng(profile.location.latitude, profile.location.longitude)}>
            <Popup>
              {profile.username}
            </Popup>
          </Marker>  
          )
      }
    } catch (error) {
      console.log("Issue with ", profile, error);
      return
    }
  }
  

  return (
    <>
      <h1>Explore</h1>
      <div class="flex">
        <div class="min-w-1/4 w-1/4">
        <ul>
          {userProfiles.map((profile) => (
            <div class="bg-white border-solid rounded-sm border-2 m-2 border-black">
              <li key={profile.id}>
                <Link to={`/explore/${profile.id}`}><h2>{profile.username}</h2></Link>
              </li>
              <p>{profile.bio}</p>
              <Skills profile={profile} />
              <a href={profile.email}>{profile.email}</a>
            </div>
          ))}
        </ul>
        </div>
        <div class="grow">
        <MapContainer center={coords} zoom={13}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <MarkerClusterGroup chunkedLoading> */}
            {userProfiles.map((uProfile) => (
              <Markers profile={uProfile} />
           
            ))}
          {/* </MarkerClusterGroup> */}
        </MapContainer>
        </div>
      </div>

      

      
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
