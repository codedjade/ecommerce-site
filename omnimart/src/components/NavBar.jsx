import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For React Router v6
import { logoutUser } from '../features/userSlice'; // Assuming you have a logout action
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);

  const handleLogoutUser = () => {
    dispatch(logoutUser());  // Dispatch logout action
    navigate('/');   // Redirect to the home page after logout
  };

  return (
    <nav className="bg-secondary text-white p-4 sticky top-0 z-50">
      <ul className="flex justify-end gap-4">
        <li>
          <Link to="/" className="text-white hover:underline">Home</Link>
        </li>
        {currentUser && currentUser.role === 'shopper' && (
          <li>
            <Link to="/cart" className="text-white hover:underline">Cart</Link>
          </li>
        )}
        <li>
          <Link to="/dashboard" className="text-white hover:underline">Dashboard</Link>
        </li>
        {currentUser ? (
          <li>
            <button 
              onClick={handleLogoutUser} 
              className="text-white hover:underline">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className="text-white hover:underline">Login</Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:underline">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
