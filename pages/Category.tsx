
import React from 'react';
import { useParams } from 'react-router-dom';
import { APPS } from '../data/apps';
import AppCard from '../components/AppCard';
import { Filter } from 'lucide-react';

const Category: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const filteredApps = APPS.filter(a => a.category === categoryName);

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{categoryName} MODs</h1>
          <p className="text-gray-500 mt-1">Found {filteredApps.length} results</p>
        </div>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">
          <Filter size={16} />
          <span>Sort By: Latest</span>
        </button>
      </div>

      <div className="app-grid">
        {filteredApps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
        {filteredApps.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-400">
            No apps found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
