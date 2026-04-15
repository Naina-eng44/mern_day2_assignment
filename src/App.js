import React, { useState } from "react";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "Naina",
    age: 20,
    profession: "Student",
  });

  const updateProfile = () => {
    setUser({
      name: "Naina Chauhan",
      age: 21,
      profession: "Frontend Developer",
    });
  };

  return (
    <div className="app-container">
      <div className="profile-card">
        <h1 className="title">👩‍💻 My Profile</h1>

        <Profile userData={user} />

        <button className="update-btn" onClick={updateProfile}>
          Upgrade Profile 
        </button>
      </div>
    </div>
  );
}

export default App;