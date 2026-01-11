
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AppDetail from './pages/AppDetail';
import Category from './pages/Category';
import Search from './pages/Search';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/:slug" element={<AppDetail />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<div className="text-center py-20 text-gray-500">404 - Not Found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
