import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false)
    const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/result-amaka')
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };
  const togglePassword =()=>{
    setPasswordShown(!passwordShown)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-sm bg-white rounded-xl shadow-md p-6" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            // type="password"
           type={passwordShown ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={togglePassword} className='text-xs'>Show Password
          { passwordShown==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
          
          </button>
        </div>

        <button
          className="w-full px-4 py-2 text-white bg-blue-950 rounded-md hover:bg-blue-900"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
