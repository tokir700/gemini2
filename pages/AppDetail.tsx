
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { APPS } from '../data/apps';
import { Star, Download, Calendar, HardDrive, ShieldCheck, CheckCircle2, ChevronRight, Info, Smartphone } from 'lucide-react';

const AppDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [downloading, setDownloading] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const app = APPS.find(a => a.slug === slug);

  if (!app) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-800">App not found</h1>
        <Link to="/" className="text-green-600 hover:underline mt-4 inline-block">Go back home</Link>
      </div>
    );
  }

  const handleDownloadClick = () => {
    setDownloading(true);
    let count = 5;
    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(timer);
        // Simulate direct download link from Cloudflare R2
        window.open(app.latestVersion.downloadUrl, '_blank');
        setDownloading(false);
        setCountdown(5);
      }
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 md:py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-gray-500 mb-6 space-x-1">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <ChevronRight size={14} />
        <Link to={`/category/${app.category}`} className="hover:text-green-600">{app.category}</Link>
        <ChevronRight size={14} />
        <span className="text-gray-900 font-medium line-clamp-1">{app.name}</span>
      </nav>

      <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Icon */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <img src={app.iconUrl} alt={app.name} className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] shadow-lg object-cover" />
            {app.modFeatures && (
              <span className="absolute -top-3 -right-3 bg-green-500 text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-md">MOD</span>
            )}
          </div>

          {/* Core Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{app.name}</h1>
            <p className="text-green-600 font-medium text-lg mb-4">{app.developer}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mb-8">
              <div className="flex flex-col items-center md:items-start px-4 border-r border-gray-200">
                <span className="text-gray-500">Rating</span>
                <div className="flex items-center font-bold text-gray-900">
                  <Star className="text-yellow-500 mr-1" size={16} fill="currentColor" /> {app.rating}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start px-4 border-r border-gray-200">
                <span className="text-gray-500">Downloads</span>
                <span className="font-bold text-gray-900">{app.downloads}</span>
              </div>
              <div className="flex flex-col items-center md:items-start px-4">
                <span className="text-gray-500">Category</span>
                <span className="font-bold text-gray-900">{app.category}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <button 
                onClick={handleDownloadClick}
                disabled={downloading}
                className={`flex items-center justify-center space-x-2 w-full py-4 rounded-2xl font-bold shadow-lg transition-all ${downloading ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
              >
                {downloading ? (
                  <span>Preparing Link in {countdown}s...</span>
                ) : (
                  <>
                    <Download size={20} />
                    <span>Download APK ({app.latestVersion.size})</span>
                  </>
                )}
              </button>
              
              <button className="flex items-center justify-center space-x-2 w-full py-4 rounded-2xl font-bold bg-gray-900 text-white hover:bg-black transition-all shadow-lg">
                <ShieldCheck size={20} />
                <span>Virus Total Clean</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* App Content Tabs/Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* MOD Features */}
          {app.modFeatures && (
            <div className="bg-green-50 rounded-3xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle2 className="mr-2 text-green-600" />
                MOD Info
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {app.modFeatures.map(feat => (
                  <li key={feat} className="flex items-center text-green-800">
                    <CheckCircle2 size={16} className="mr-2 text-green-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots */}
          <section>
            <h3 className="text-xl font-bold mb-4">Screenshots</h3>
            <div className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar">
              {app.screenshots.map((s, idx) => (
                <img key={idx} src={s} alt={`SS ${idx}`} className="h-[400px] rounded-2xl shadow-sm border border-gray-100 shrink-0" />
              ))}
            </div>
          </section>

          {/* Description */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <div className="prose prose-green max-w-none text-gray-600 leading-relaxed">
              <p>{app.description}</p>
              <h4 className="font-bold text-gray-900 mt-6 mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>High-speed downloads optimized via Cloudflare.</li>
                <li>Secure installation with no harmful files.</li>
                <li>Regular updates following play store releases.</li>
                <li>Works on non-rooted devices seamlessly.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100">
            <h3 className="text-lg font-bold mb-4">App Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <div className="flex items-center text-gray-500"><Info size={16} className="mr-2"/> Version</div>
                <div className="font-semibold">{app.latestVersion.version}</div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <div className="flex items-center text-gray-500"><Calendar size={16} className="mr-2"/> Updated</div>
                <div className="font-semibold">{app.latestVersion.updatedAt}</div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <div className="flex items-center text-gray-500"><HardDrive size={16} className="mr-2"/> Size</div>
                <div className="font-semibold">{app.latestVersion.size}</div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                {/* Added missing Smartphone import above */}
                <div className="flex items-center text-gray-500"><Smartphone size={16} className="mr-2"/> OS</div>
                <div className="font-semibold">Android 6.0+</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-3xl p-6">
             <h3 className="font-bold mb-2">How to install?</h3>
             <p className="text-gray-400 text-sm mb-4">1. Download APK from our site.</p>
             <p className="text-gray-400 text-sm mb-4">2. Enable "Unknown Sources" in settings.</p>
             <p className="text-gray-400 text-sm">3. Install and enjoy Premium features.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
