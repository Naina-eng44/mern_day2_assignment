import React from "react";

function Profile({ userData }) {
  return (
    <div>
      <h2 className="profile-text">👤 {userData.name}</h2>
      <p className="profile-text">🎂 Age: {userData.age}</p>
      <p className="profile-text">💼 {userData.profession}</p>

      <p className="status"> Active Learner</p>
    </div>
  );
}

export default Profile;