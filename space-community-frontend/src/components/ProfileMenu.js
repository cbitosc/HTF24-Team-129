import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import './ProfileMenu.css'; // Create a CSS file to style the dropdown

function ProfileMenu() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!user) return null; // Show nothing if the user is not loaded

  return (
    <div className="profile-menu">
      <div onClick={() => setIsOpen(!isOpen)} className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <span>{user.username}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => navigate('/profile')}>
            <FaUser /> View Profile
          </button>
          <button onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
