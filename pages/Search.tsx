
import React from 'react';
import { useLocation } from 'react-router-dom';
import { APPS } from '../data/apps';
import AppCard from '../components/AppCard';

const Search: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  
  const results = APPS.filter(a => 
    a.name.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase()) ||
    a.developer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
      <p className="text-gray-500 mb-8">Showing results for: <span className="text-green-600 font-semibold">"{query}"</span></p>

      {results.length > 0 ? (
        <div className="app-grid">
          {results.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-gray-800">No matches found</h2>
          <p className="text-gray-500 mt-2 max-w-sm mx-auto">
            Try searching for something else or browse our categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
