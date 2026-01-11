
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download } from 'lucide-react';
import { AppData } from '../types';

interface AppCardProps {
  app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <Link to={`/app/${app.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="p-4 flex flex-col items-center text-center">
        <div className="relative mb-3">
          <img
            src={app.iconUrl}
            alt={app.name}
            className="w-24 h-24 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
          {app.modFeatures && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow-sm">
              MOD
            </span>
          )}
        </div>
        
        <h3 className="font-bold text-gray-900 text-sm md:text-base line-clamp-1 mb-1 group-hover:text-green-600 transition-colors">
          {app.name}
        </h3>
        
        <p className="text-xs text-gray-500 mb-2">{app.category}</p>
        
        <div className="flex items-center space-x-3 mt-auto">
          <div className="flex items-center text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-semibold ml-1 text-gray-700">{app.rating}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Download size={14} />
            <span className="text-xs ml-1">{app.latestVersion.size}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto bg-gray-50 p-2 text-center text-xs font-medium text-green-600 border-t border-gray-100 group-hover:bg-green-600 group-hover:text-white transition-colors">
        Free Download
      </div>
    </Link>
  );
};

export default AppCard;
