
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-green-600 p-1.5 rounded-lg">
                <Smartphone className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">APK<span className="text-green-600">Flow</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The leading platform for high-quality, verified MOD APKs. Safe, fast, and secure downloads for global users.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"><Github size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Popular Tags</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/category/Games" className="hover:text-green-500 transition-colors">Mod Games</Link></li>
              <li><Link to="/category/Apps" className="hover:text-green-500 transition-colors">Premium Apps</Link></li>
              <li><Link to="/category/Tools" className="hover:text-green-500 transition-colors">Productivity MODs</Link></li>
              <li><Link to="/category/Entertainment" className="hover:text-green-500 transition-colors">Ad-Free Music</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal & Policy</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">DMCA Disclaimer</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Get notified about the latest MOD updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-800 rounded-lg py-2 px-4 text-sm focus:ring-2 focus:ring-green-500 outline-none"
              />
              <button className="mt-2 w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-bold text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} APKFlow. All Rights Reserved. Not affiliated with Google Play Store.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
