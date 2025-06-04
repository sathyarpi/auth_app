import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate(); // hook for navigation
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const signup = async () => {
      if (!username.trim()) {
        setError("Username cannot be empty.");
        return;
      }
  
      if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }
  
      try {
        const res = await axios.post('http://localhost:5000/auth/signup', { username, password });
        if (res.data.success) {
          alert('Signup successful!');
          setUsername('');
          setPassword('');
          setError('');
          navigate('/'); 
        } else {
          setError(res.data.message || "Signup failed.");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-8 border border-gray-100 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#5A0F1B]/10 blur-xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#5A0F1B]/5 blur-xl"></div>

        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-1 bg-[#5A0F1B] mb-4"></div>
          <h2 className="text-4xl font-bold text-[#5A0F1B] font-serif tracking-tight">Create Account</h2>
          <p className="text-gray-500 text-sm">Join our exclusive community</p>
        </div>

        <div className="space-y-6">
          {error && (
            <div className="text-red-600 text-sm text-center font-medium -mt-4">{error}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Username</label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-5 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#5A0F1B] focus:bg-white shadow-sm transition-all duration-200 placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full px-5 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#5A0F1B] focus:bg-white shadow-sm transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-1">Minimum 8 characters</p>
          </div>

          <button
            onClick={signup}
            className="w-full py-4 bg-[#5A0F1B] hover:bg-[#4a0c17] text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#5A0F1B]/20 hover:translate-y-[-1px] active:translate-y-0"
          >
            <span className="drop-shadow-sm">Sign Up</span>
          </button>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-center text-gray-500">
            Already a member?{' '}
            <a href="/" className="text-[#5A0F1B] font-medium hover:underline hover:text-[#4a0c17] transition">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
