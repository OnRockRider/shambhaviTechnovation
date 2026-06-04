import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import './css/Footer.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-brandOrange selection:text-white overflow-x-hidden">
        
        <Header />
        
        {/* The main wrapper stays here to handle the Footer stack-up effect */}
        <main className="relative z-10 bg-[#faf9f6] dark:bg-slate-950 mb-0 md:mb-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Routes>
            {/* All these paths render the Home component, and the useEffect inside Home handles the scrolling */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/products" element={<Home />} /> 
            <Route path="/products/explore" element={<ServiceDetail pageType="products" />} />
            <Route path="/work" element={<Home />} />
            <Route path="/work/explore" element={<ServiceDetail pageType="work" />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/faq" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
