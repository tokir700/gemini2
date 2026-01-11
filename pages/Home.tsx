
import React from 'react';
import { APPS } from '../data/apps';
import AppCard from '../components/AppCard';
import { TrendingUp, Clock, Star } from 'lucide-react';

const Home: React.FC = () => {
  const featured = APPS.filter(app => app.isFeatured);
  const recent = APPS.slice().sort((a, b) => new Date(b.latestVersion.updatedAt).getTime() - new Date(a.latestVersion.updatedAt).getTime());

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-green-600 rounded-3xl p-8 md:p-12 text-white mt-4">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            The Best Premium <br/> MOD APKs for Android
          </h1>
          <p className="text-green-100 text-lg mb-8">
            Safe, fast, and secure downloads for your favorite apps and games with premium features unlocked.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Latest Games
            </button>
            <button className="bg-green-700 text-white border border-green-500 px-6 py-3 rounded-full font-bold hover:bg-green-800 transition-colors">
              App Store
            </button>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/20 skew-x-12 transform translate-x-20 hidden lg:block"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Featured Apps */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <TrendingUp className="mr-2 text-green-600" />
            Top Featured MODs
          </h2>
          <button className="text-green-600 font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="app-grid">
          {featured.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Recent Updates */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Clock className="mr-2 text-green-600" />
            Recently Updated
          </h2>
          <button className="text-green-600 font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="app-grid">
          {recent.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Popular Categories section */}
      <section className="bg-white rounded-3xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Games', 'Apps', 'Tools', 'Social', 'Entertainment', 'Productivity', 'Photography', 'Music'].map(cat => (
            <div key={cat} className="p-4 bg-gray-50 rounded-2xl hover:bg-green-50 hover:text-green-600 transition-all text-center font-semibold cursor-pointer border border-transparent hover:border-green-200">
              {cat}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
