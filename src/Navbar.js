import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import logo from './Assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = auth.currentUser !== null; // Check if the user is authenticated

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/'); // Redirect to the login page after successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-blue-950 p-7" >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl font-style: italic mr-0.5 "  >
          Weight Tracker
        </Link>
        <img src= {logo} className='w-8 h-8 mr-auto' />
      {
        isAuthenticated &&
        <div>
          <Link
            to="/result-amaka"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md mr-2"
          >
            Amaka
          </Link>
          <Link
            to="/result-nnenna"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md mr-2"
          >
            Nnenna
          </Link>
          <Link
            to="/form"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Form
          </Link>
          <Link
            to="/form"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md"
            onClick={handleLogout}
          >
            Log Out
          </Link>
        </div>
      }
      </div>
    </nav>
  );
};

export default Navbar;