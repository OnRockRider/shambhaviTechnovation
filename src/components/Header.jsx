import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = ['Home', 'Services', 'Work', 'Contact'];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-500">
      
      {/* 
        FIX 1: Added `relative z-10` to this main container. 
        This keeps the logo and hamburger underneath the z-40 backdrop blur when the menu opens.
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => setIsMenuOpen(false)}
          className="font-black text-xl tracking-tighter text-slate-900 dark:text-white"
        >
          SHAMBHAVI<span className="text-brandOrange">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link key={item} to={path} className="nav-underline">
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Desktop Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle Switch (Hidden on Mobile, moved to Drawer) */}
          <button 
            onClick={toggleTheme}
            className="hidden md:flex relative w-14 h-8 items-center bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors duration-300 focus:outline-none cursor-pointer"
          >
            <motion.div
              className="w-6 h-6 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-md"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{ 
                marginLeft: isDark ? 'auto' : '0px',
                marginRight: isDark ? '0px' : 'auto'
              }}
            >
              {isDark ? <Moon size={14} className="text-brandOrange" /> : <Sun size={14} className="text-brandOrange" />}
            </motion.div>
          </button>

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
            {/* 
              FIX 2: Backdrop is z-40. 
              Because the logo/hamburger container is z-10, this backdrop will now perfectly cover and blur them out.
            */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 h-screen w-screen bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden z-40"
            />

            {/* Menu Panel - z-50 keeps it above the backdrop */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-4/5 max-w-[320px] bg-[#faf9f6] dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col md:hidden z-50 shadow-2xl"
            >
              
              {/* FIX 3: Top Bar inside Drawer (Toggle & Close 'X' side-by-side as shown in your image) */}
              <div className="flex items-center justify-end gap-6 mb-12 mt-2">
                
                {/* Mobile Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="relative w-14 h-8 flex items-center bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors duration-300 focus:outline-none cursor-pointer"
                >
                  <motion.div
                    className="w-6 h-6 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-md"
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    style={{ 
                      marginLeft: isDark ? 'auto' : '0px',
                      marginRight: isDark ? '0px' : 'auto'
                    }}
                  >
                    {isDark ? <Moon size={14} className="text-brandOrange" /> : <Sun size={14} className="text-brandOrange" />}
                  </motion.div>
                </button>

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