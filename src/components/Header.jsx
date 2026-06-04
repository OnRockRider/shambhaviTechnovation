import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logoDesign from '/images/logo-design.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'Services','Products', 'Work', 'Contact'];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-500">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => setIsMenuOpen(false)}
          className="inline-flex items-center shrink-0"
        >
          <img
            src={logoDesign}
            alt="Shambhavi Technovation"
            className="h-10 w-auto max-w-[180px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link key={item} to={path} className="nav-underline text-slate-900 dark:text-white">
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Desktop Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex md:hidden text-slate-800 dark:text-white focus:outline-none cursor-pointer p-1"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>

      </div>

      {/* Mobile Slide-out Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 h-screen w-screen bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden z-40"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-4/5 max-w-[320px] bg-[#faf9f6] dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col md:hidden z-50 shadow-2xl"
            >
              
              <div className="flex items-center justify-end gap-6 mb-12 mt-2">
                {/* Mobile Theme Toggle uses the exact same component */}
                <ThemeToggle />

                {/* Close 'X' Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-800 dark:text-white focus:outline-none cursor-pointer p-1 hover:text-brandOrange transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 px-2">
                {navItems.map((item, index) => {
                  const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-medium tracking-tight text-slate-800 dark:text-slate-200 hover:text-brandOrange dark:hover:text-brandOrange transition-colors block py-3 border-b border-slate-100 dark:border-slate-800/60"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
