
import React, { useState } from 'react';
import { Search, Menu, X, Smartphone, Gamepad2, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
    { name: 'Games', icon: <Gamepad2 size={18} />, path: '/category/Games' },
    { name: 'Apps', icon: <Smartphone size={18} />, path: '/category/Apps' },
    { name: 'MODs', icon: <Layers size={18} />, path: '/category/Tools' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-600 p-1.5 rounded-lg">
              <Smartphone className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">APK<span className="text-green-600">Flow</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((cat) => (
              <Link key={cat.name} to={cat.path} className="flex items-center space-x-1 text-gray-600 hover:text-green-600 font-medium transition-colors">
                {cat.icon}
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-8 relative">
            <input
              type="text"
              placeholder="Search apps, games, mods..."
              className="w-full bg-gray-100 border-none rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600">
              <Search size={18} />
            </button>
          </form>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 rounded-lg py-3 pl-4 pr-10 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-3.5 text-gray-400" size={20} />
          </form>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl text-gray-600 hover:text-green-600 hover:bg-green-50"
              >
                {cat.icon}
                <span className="mt-1 text-sm font-medium">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
