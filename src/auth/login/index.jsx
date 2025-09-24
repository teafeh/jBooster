import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white font-sans p-4">

         <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full">
                <Link 
                  to={"/"}
                  className="text-white font-bold text-xl hover:text-pink-400 transition"
                >
                  ⬅ Back to Home
                </Link>
                <h1 className="text-white font-extrabold text-2xl">Boostify 🚀</h1>
              </nav>

      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-3xl p-8 md:p-10 max-w-md w-full border border-purple-600 relative overflow-hidden">
        {/* Decorative blobs - consistent with landing page */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Welcome Back!
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Log in to continue boosting your social presence.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-200 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-purple-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
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
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-blue-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded bg-white bg-opacity-20"
                />
                <label htmlFor="rememberMe" className="ml-2 text-gray-300">
                  Remember me
                </label>
              </div>
              <a href="#" className="font-medium text-purple-400 hover:text-purple-300 transition duration-300">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Log In
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-sm">
            Don't have an account?{' '}              
              <Link to={"/signup"} className="font-medium text-green-400 hover:text-green-300 transition duration-300">
          Sign up
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;