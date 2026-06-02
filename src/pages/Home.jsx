import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  // The Route Interceptor for Smooth Scrolling
  useEffect(() => {
    const path = location.pathname.replace('/', ''); 
    
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); 
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {/* Notice the ID tags added to each wrapper block */}
      
      <div id="home" className="bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500">
        <Hero />
      </div>

      <div id="work" className="bg-white dark:bg-black transition-colors duration-500 border-t border-slate-200 dark:border-slate-900">
        <FeaturedProjects />
      </div>

      <div id="faq" className="bg-slate-50 dark:bg-slate-950 transition-colors duration-500 border-t border-slate-200 dark:border-slate-900">
        <Faq />
      </div>

      <div id="contact" className="bg-[#faf9f6] dark:bg-[#020617] transition-colors duration-500 border-t border-slate-200 dark:border-slate-900">
        <Contact />
      </div>
    </>
  );
};

export default Home;