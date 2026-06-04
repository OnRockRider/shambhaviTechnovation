import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import FeaturedProjects from '../components/FeaturedProjects';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', ''); 
    
    if (path && !path.includes('explore')) {
      const element = document.getElementById(path);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); 
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    // Grab all the main sections on the homepage
    const sections = document.querySelectorAll('div[id="home"], div[id="services"], div[id="products"], div[id="work"], div[id="faq"], div[id="contact"]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When a section takes up at least 50% of the screen
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const newPath = id === 'home' ? '/' : `/${id}`;
          
          // Silently update the URL bar WITHOUT triggering a React refresh
          if (window.location.pathname !== newPath) {
            window.history.replaceState(null, '', newPath);
          }
        }
      });
    }, { threshold: 0.5 }); // 0.5 means 50% of the section must be visible

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <div id="home" className="bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500">
        <Hero />
      </div>

      <div id="services" className="bg-white dark:bg-black transition-colors duration-500 border-t border-slate-200 dark:border-slate-900">
        <Services />
      </div>

      <div id="products" className="bg-white dark:bg-black transition-colors duration-500 border-t border-slate-200 dark:border-slate-900">
        <Products />
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