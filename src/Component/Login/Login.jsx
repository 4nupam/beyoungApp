import React, { useState } from 'react';

const Login = ({ close }) => {
  
  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-5 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={close}></div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-4 sm:mx-6 md:mx-8 lg:mx-auto z-10">
        <div className="relative flex flex-col h-full">
          
          <div className="w-full flex items-center justify-center bg-gray-100">
            <img 
              src="https://www.beyoung.in/images/login-and-signup-image.jpg" 
              alt="Login Background" 
              className="w-full h-40 object-cover"
            />
          </div>
          
          <div className="w-full flex items-center justify-center bg-white p-6 sm:p-8">
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">Login Here</h2>
              
              <p className="text-sm text-gray-600 text-center mb-6">
                Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up here</a>
              </p>
              
              <form className="space-y-4">
                
                <div>
                  <label 
                    htmlFor="usernameOrEmail" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username or Email
                  </label>
                  <input 
                    type="text" 
                    id="usernameOrEmail" 
                    placeholder="Enter your username or email"
                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <span className="text-red-500 text-xs">Enter a valid username or email</span>
                </div>
                
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Password" 
                    className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <span className="text-red-500 text-xs">Enter a valid password</span>
                </div>
                
                <div className="flex justify-between items-center space-x-2">
                  <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                  <button 
                    type="button" 
                    onClick={close}
                    className="w-full py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
