import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import Register from './components/Register';
import Forum from './components/Forum';
import Profile from './components/Profile';
import ProfileMenu from './components/ProfileMenu';
import './App.css'; // Optional for general styling

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if the user is authenticated by verifying the token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => setIsAuthenticated(true))
        .catch(() => {
          setIsAuthenticated(false);
          localStorage.removeItem('token');
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <h1>Space Enthusiasts Community</h1>
          {isAuthenticated ? <ProfileMenu onLogout={handleLogout} /> : null}
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/forum" /> : <Login onLogin={() => setIsAuthenticated(true)} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/forum"
            element={isAuthenticated ? <Forum /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
