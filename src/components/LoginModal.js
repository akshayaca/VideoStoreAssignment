import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

const LoginModal = ({ closeModal, onLoginSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { setIsAuthenticated } = useAuth();
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      AuthService.login(email, password,setIsAuthenticated)
      .then((data) => {
        if(data && data.accessToken) {
          
          if (typeof onLoginSuccess === 'function') {
            onLoginSuccess();
            
          } 
          closeModal();
          navigate('/');
        } else {
          // Handle no access token received
          setErrorMessage("No access token received");
      }
  }
      )
        .catch((error) => {
          console.error('Login error:', error);
          setErrorMessage(error.response.data.message || "No User found.");
        });
    } else {
      AuthService.register(firstName, lastName, email, password)
        .then(() => {
          setIsLogin(true); 
          setErrorMessage("User registered successfully. Please login.");
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message || "An error occurred during signup.");
        });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <div ref={modalRef} className="bg-black p-6 rounded-lg border border-blue">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-white-700">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                style={{ color: 'black', cursor: 'text' }}
              />
            </div>
          )}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-white-700">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                style={{ color: 'black', cursor: 'text' }}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              style={{ color: 'black', cursor: 'text' }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              style={{ color: 'black', cursor: 'text' }}
            />
          </div>
          {errorMessage && <div className="text-red-500 text-sm mb-2">{errorMessage}</div>}

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <p className="text-sm text-white px-2">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                type="button"
                className="text-blue-500 ml-1 focus:outline-none"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;