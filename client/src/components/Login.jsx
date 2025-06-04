import {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const login = async () => {
      if (!username.trim() || !password.trim()) {
        alert("Username and Password are required.");
        return;
      }
    
      try {
        const res = await axios.post('http://localhost:5000/auth/login', { username, password });
    
        if (res.data.success) {
          localStorage.setItem('user', res.data.username);
          nav('/profile');
        } else {
          // Login failed (username not found or password incorrect)
          alert(res.data.message || "Invalid username or password.");
        }
      } catch (err) {
        alert("Invalid username or password.");
      }
    };
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-8 border border-gray-100 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#5A0F1B]/5 blur-xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#5A0F1B]/5 blur-xl"></div>
        
        <div className="text-center space-y-4 relative z-10">
          <div className="mx-auto w-16 h-1 bg-[#5A0F1B] mb-4"></div>
          <svg className="mx-auto h-12 w-12 text-[#5A0F1B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
          <h2 className="text-3xl font-bold text-gray-900 font-serif tracking-tight">Welcome Back</h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Sign in to continue</p>
        </div>
    
        <div className="space-y-6 relative z-10">
          <div className="space-y-1">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Username</label>
            <div className="relative">
              <input
                id="username"
                type="text"
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-5 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#5A0F1B] focus:bg-white shadow-sm transition-all duration-200 placeholder-gray-400 pl-12"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
    
          <div className="space-y-1">
            <div className="flex justify-between items-center mb-1 ml-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <a href="/forgot-password" className="text-xs text-[#5A0F1B] hover:underline font-medium">Forgot password?</a>
            </div>
            <div className="relative">
              <input
                id="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-5 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-[#5A0F1B] focus:bg-white shadow-sm transition-all duration-200 placeholder-gray-400 pl-12"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
    
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#5A0F1B] focus:ring-[#5A0F1B] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
          </div>
    
          <button
            onClick={login}
            className="w-full py-4 bg-[#5A0F1B] hover:bg-[#4a0c17] text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#5A0F1B]/20 hover:translate-y-[-1px] active:translate-y-0 group"
          >
            <span className="flex items-center justify-center">
              Sign In
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </span>
          </button>
        </div>
    
        <div className="text-center text-sm text-gray-500 relative z-10 pt-4 border-t border-gray-100">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-[#5A0F1B] hover:text-[#4a0c17] hover:underline transition-all duration-200">Create account</a>
        </div>
      </div>
    </div>

  );

}