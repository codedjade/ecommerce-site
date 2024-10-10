// src/components/Home.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../features/productSlice'; // Import your fetchProducts action

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const products = useSelector((state) => state.products.products); // Assuming products are in the state

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]);

  return (
    <div className="home-container min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to OmniMart</h1>
      <p className="text-lg text-gray-300 mb-10 max-w-2xl text-center">
        This app allows admins, sellers, and shoppers to manage users, post products, and make purchases.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-white">Available Items for Sale</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 bg-gray-800 hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
            <p className="text-gray-400 mb-2">Price: ${!isNaN(product.price) ? Number(product.price).toFixed(2) : 'N/A'}</p>
            <p className="text-gray-400 mb-2">Seller: {product.sellerName}</p>
            <p className="text-gray-400 mb-4">Contact: {product.sellerContact}</p>
            <Link 
              to={`/product/${product.id}`} // Link to View Details page
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="home-navigation mt-10">
        {currentUser ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Hello, {currentUser.name}!</h2>
            <LogoutButton className="mt-4 bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300" />
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-medium text-gray-300 mb-4">Please log in or register to continue.</h2>
            <Link
              to="/register"
              className="bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-blue-700 text-white py-2 px-6 rounded-xl hover:bg-blue-600 transition duration-300 ease-in-out ml-4"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
