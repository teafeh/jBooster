import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white flex flex-col font-sans p-4">
      
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full">
        <Link 
          to={"/"}
          className="text-white font-bold text-xl hover:text-pink-400 transition"
        >
          ⬅ Back to Home
        </Link>
        <h1 className="text-white font-extrabold text-2xl">Boostify 🚀</h1>
      </nav>
      
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-3xl p-8 md:p-10 max-w-md w-full border border-green-600 relative overflow-hidden">
        {/* Decorative blobs - consistent with landing page */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
            Join BoostWave!
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Start your journey to unparalleled social media growth.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-200 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-green-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-blue-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-200 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-purple-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-200 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-green-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                required
              />
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1 bg-white bg-opacity-20"
                required
              />
              <label htmlFor="terms" className="ml-2 text-gray-300 text-sm">
                I agree to the{' '}
                <a href="#" className="font-medium text-green-400 hover:text-green-300 transition duration-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-green-400 hover:text-green-300 transition duration-300">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-sm">
            Already have an account?{' '}              
              <Link to={"/login"} className="font-medium text-purple-400 hover:text-purple-300 transition duration-300">
         Log in
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;