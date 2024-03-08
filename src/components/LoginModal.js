import React, { useState, useRef, useEffect } from 'react';

const LoginModal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // True for login, false for signup
  const modalRef = useRef(null);

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
    // Here you can perform login/signup logic, for demo purposes, just showing an alert
    if (isLogin) {
      alert('Login successful!');
    } else {
      alert('Signup successful!');
    }
    closeModal(); // Close the modal after successful login/signup
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <div ref={modalRef} className="bg-black p-6 rounded-lg border border-blue">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              style={{ color: 'black', cursor: 'text' }} // Inline style for text color and cursor
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
              style={{ color: 'black', cursor: 'text' }} // Inline style for text color and cursor
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <p className="text-sm text-white">
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
