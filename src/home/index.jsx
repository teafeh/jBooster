import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white font-sans">

        
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          BoostWave
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-purple-300 transition duration-300">Features</a>
          <a href="#testimonials" className="hover:text-purple-300 transition duration-300">Testimonials</a>
          <a href="#pricing" className="hover:text-purple-300 transition duration-300">Pricing</a>
          <a href="#contact" className="hover:text-purple-300 transition duration-300">Contact</a>
        </div>
          <Link to={"signup"} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
          Get Started
          </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Background Illustration/Pattern */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Amplify Your Social Reach. <br />Engage. Grow. Succeed.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Unlock exponential growth for your social media presence. BoostWave provides authentic engagement that drives real results.
          </p>
          <a href="#get-started" className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white text-xl font-bold px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition duration-300">
            Start Your Growth Journey
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-24 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-green-300">
            How BoostWave Propels You Forward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-purple-500 transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4 text-purple-400">
                <i className="fas fa-chart-line"></i> {/* Example Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-200">Authentic Engagement</h3>
              <p className="text-gray-300">
                Gain genuine likes, comments, and followers from real, active users. No bots, just organic growth.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-blue-500 transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4 text-blue-400">
                <i className="fas fa-rocket"></i> {/* Example Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-200">Rapid Growth</h3>
              <p className="text-gray-300">
                Accelerate your social media presence and reach a wider audience faster than ever before.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-green-500 transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-lock"></i> {/* Example Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-200">Secure & Compliant</h3>
              <p className="text-gray-300">
                Our methods are safe, secure, and fully compliant with platform guidelines. Your account is always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section - Could be an image or illustration */}
      <section className="py-20 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            See the Difference BoostWave Makes
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Witness how our clients have transformed their social media presence.
          </p>
          {/* Placeholder for an engaging image or video */}
          <div className="relative w-full max-w-4xl mx-auto h-96 bg-gray-800 rounded-2xl shadow-inner flex items-center justify-center border-4 border-purple-500 overflow-hidden">
            <p className="text-gray-400 text-2xl">Visual of growth/engagement dashboard or successful campaign</p>
            {/* Image Placeholder */}
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-green-500 transform hover:scale-105 transition duration-300">
              <p className="text-lg italic mb-6 text-gray-200">
                "BoostWave truly transformed my Instagram. I've seen a massive increase in engagement and my content is finally reaching the right audience. Highly recommended!"
              </p>
              <div className="flex items-center justify-center">
                <img src="https://via.placeholder.com/60" alt="Client 1" className="w-16 h-16 rounded-full mr-4 border-2 border-green-400"/>
                <div>
                  <p className="font-semibold text-green-300">Jane Doe</p>
                  <p className="text-sm text-gray-400">Influencer, Fashion</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-purple-500 transform hover:scale-105 transition duration-300">
              <p className="text-lg italic mb-6 text-gray-200">
                "As a small business, getting visibility on social media was tough. BoostWave gave us the kickstart we needed, resulting in more leads and sales!"
              </p>
              <div className="flex items-center justify-center">
                <img src="https://via.placeholder.com/60" alt="Client 2" className="w-16 h-16 rounded-full mr-4 border-2 border-purple-400"/>
                <div>
                  <p className="font-semibold text-purple-300">John Smith</p>
                  <p className="text-sm text-gray-400">Owner, Tech Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Flexible Plans for Every Goal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-purple-600 transform hover:-translate-y-4 transition duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-purple-600 transform rotate-45 -mr-12 -mt-12 opacity-30"></div>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Starter</h3>
              <p className="text-gray-300 text-lg mb-6">Perfect for new profiles</p>
              <div className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                $49<span className="text-3xl font-normal text-gray-400">/month</span>
              </div>
              <ul className="text-left text-gray-200 space-y-3 mb-8">
                <li><i className="fas fa-check text-green-400 mr-2"></i> 500+ Engagements</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> Targeted Audience</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> Basic Analytics</li>
                <li><i className="fas fa-times text-red-400 mr-2"></i> Priority Support</li>
              </ul>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                Choose Starter
              </button>
            </div>

            {/* Plan 2 - Recommended */}
            <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border-4 border-green-500 transform hover:-translate-y-4 transition duration-500 relative overflow-hidden ring-4 ring-green-400 ring-opacity-50">
              <div className="absolute top-0 right-0 h-24 w-24 bg-green-500 transform rotate-45 -mr-12 -mt-12 text-white flex items-center justify-center font-bold text-sm">
                <span className="absolute transform -rotate-45 translate-y-2">BEST VALUE</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-green-300">Pro</h3>
              <p className="text-gray-300 text-lg mb-6">For serious growth</p>
              <div className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                $99<span className="text-3xl font-normal text-gray-400">/month</span>
              </div>
              <ul className="text-left text-gray-200 space-y-3 mb-8">
                <li><i className="fas fa-check text-green-400 mr-2"></i> 2000+ Engagements</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> Advanced Targeting</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> In-depth Analytics</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> Priority Support</li>
              </ul>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                Choose Pro
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-blue-600 transform hover:-translate-y-4 transition duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-blue-600 transform rotate-45 -mr-12 -mt-12 opacity-30"></div>
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Enterprise</h3>
              <p className="text-gray-300 text-lg mb-6">Custom solutions</p>
              <div className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Custom
              </div>
              <ul className="text-left text-gray-200 space-y-3 mb-8">
                <li><i className="fas fa-check text-green-400 mr-2"></i> Unlimited Engagements</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> Dedicated Account Manager</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> Full Integration Support</li>
                <li><i className="fas fa-check text-green-400 mr-2"></i> Custom Reporting</li>
              </ul>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="get-started" className="py-20 md:py-24 bg-gradient-to-br from-purple-900 to-blue-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-300">
            Ready to Ignite Your Social Media?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied users who are already seeing incredible results with BoostWave. Start your free consultation today!
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600 text-white text-xl font-bold px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition duration-300">
            Get Your Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4 md:mb-0">
              BoostWave
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="text-lg mb-4">
            <p>Email: <a href="mailto:info@boostwave.com" className="hover:text-white">info@boostwave.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
          </div>
          <p>&copy; {new Date().getFullYear()} BoostWave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;