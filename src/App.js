import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'products': return <Products />;
      case 'gallery': return <Gallery />;
      case 'blog': return <Blog />;
      case 'careers': return <Careers />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;