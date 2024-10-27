import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      <img src={user.profilePicture} alt="Profile" />
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
    </div>
  );
}

export default Profile;
