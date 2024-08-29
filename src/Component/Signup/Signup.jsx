import React from 'react';

const Signup = ({ close }) => {
  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-5 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={close}></div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-4 sm:mx-6 md:mx-8 lg:mx-auto z-10">
        <div className="relative flex flex-col h-full">
          
          <div className="w-full flex items-center justify-center bg-gray-100">
            <img 
              src="https://www.beyoung.in/images/login-and-signup-image.jpg" 
              alt="Signup Background" 
              className="w-full h-40 object-cover"
            />
          </div>
          
          <div className="w-full flex items-center justify-center bg-white p-6 sm:p-8">
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
              
              <form className="space-y-4">
                
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Enter your phone number"
                      className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
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
                </div>
                
                <div className="flex justify-between items-center space-x-2">
                  <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              
              <div className="mt-6 flex justify-center">
                <button 
                  type="button" 
                  className="flex items-center py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M24 9.5c3.24 0 6.05 1.18 8.29 3.11L37.94 8C33.95 4.66 29.32 3 24 3 14.88 3 7.19 8.8 4.68 16.97l7.43 5.74C13.55 14.52 18.42 9.5 24 9.5z"/>
                    <path fill="#34A853" d="M9.69 27.77C10.72 30.68 13.19 33 16.43 34c2.95.89 6.18.11 8.55-1.85l7.43 5.75c-4.57 3.34-10.33 4.53-16.12 3.53-8.1-1.36-14.62-8.06-16.52-15.91l7.43-5.75z"/>
                    <path fill="#FBBC05" d="M44 24c0-1.45-.13-2.86-.38-4.23H24v8.09h11.45c-.83 2.18-2.05 4.09-3.63 5.64v4.64h5.86C42.8 34.27 44 29.36 44 24z"/>
                    <path fill="#EA4335" d="M24 44c5.32 0 10.17-1.75 14.04-4.77l-7.43-5.75c-2.34 1.52-5.21 2.36-8.26 2.09-3.28-.26-6.36-1.57-8.69-3.62L9.69 34C14.09 39.08 18.9 44 24 44z"/>
                  </svg>
                  Sign Up with Gmail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
