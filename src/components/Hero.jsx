import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // <section className="relative min-h-screen flex items-center justify-center bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500 px-6 md:px-12 overflow-hidden">
    <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-32 lg:pt-20 bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500 px-6 md:px-12 overflow-hidden">
      
      {/* 1. Artistic Graph Paper Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none dark:opacity-20 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center justify-center min-h-screen lg:min-h-0 pt-20 lg:pt-0">
        
        {/* Left Column: Editorial Typography */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full px-4 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] text-slate-900 dark:text-white transition-colors duration-500 leading-[1.1] tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            <span className="block text-slate-900 dark:text-white">
              We craft
            </span>
            <span className="block mt-1 italic font-normal text-brandOrange dark:text-orange-300 transition-colors duration-500">
              digital
            </span>
            <span className="relative inline-block mt-2 text-slate-700 dark:text-slate-100">
              experiences.
            </span>
            {/* <span className="relative inline-block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
  experiences.
</span> */}
{/* <span className="relative inline-block mt-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400 text-transparent bg-clip-text">
  experiences.
</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 lg:mt-10 text-base md:text-xl text-slate-600 dark:text-slate-400 transition-colors duration-500 max-w-xl font-light leading-relaxed"
          >
            Engineering custom software and premium UI/UX that scales. No fluff, just production-ready architecture mapped to perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6 w-full sm:w-auto"
          >
            <Link 
              to="/contact" 
              className="inline-block text-center px-6 py-3 md:px-8 md:py-4 bg-slate-900 text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-brandOrange transition-colors duration-300 w-full sm:w-auto"
            >
              Start a Project
            </Link>

            <Link 
              to="/work" 
              className="inline-block text-center px-6 py-3 md:px-8 md:py-4 border border-slate-300 dark:border-slate-200 text-slate-700 dark:text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:border-brandOrange dark:hover:border-brandOrange hover:text-slate-900 dark:hover:text-white transition-colors duration-300 w-full sm:w-auto"
            >
              Our Work
            </Link>
          </motion.div>
        </div>

        {/* 3. Right Column: Dark Geometric Element */}
        {/* FIX APPLIED HERE: Added dark:opacity-30 so it shows up on mobile in dark mode, and transitioned it */}
        <div className="absolute inset-0 lg:relative flex items-center justify-center h-full lg:h-[600px] w-full pointer-events-none z-0 opacity-15 dark:opacity-30 lg:opacity-100 lg:dark:opacity-100 scale-75 lg:scale-100 transition-opacity duration-500">
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Heavy Outer Ring - Glows Orange in Dark Mode */}
            <motion.div
              animate={{ rotateX: 360, rotateY: 180 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border-4 border-slate-800 dark:border-brandOrange/50 rounded-full transition-colors duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Intersecting Ring - Faint Orange in Dark Mode */}
            <motion.div
              animate={{ rotateY: -360, rotateX: -180 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border-2 border-slate-700 dark:border-orange-400/40 rounded-full transition-colors duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Solid Geometric Core - Bright Orange with Glow in Dark Mode */}
            {/* <motion.div
              animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 bg-slate-900 dark:bg-brandOrange rounded-2xl shadow-2xl dark:shadow-[0_0_30px_rgba(255,87,34,0.4)] flex items-center justify-center overflow-hidden transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
              <div className="w-12 h-12 border border-brandOrange/50 rotate-45" />
            </motion.div>
             */}


             {/* Solid Dark Geometric Core */}
{/* Solid Dark Geometric Core */}
<motion.div
  animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  className="absolute w-32 h-32 bg-slate-900 dark:bg-brandOrange rounded-2xl shadow-2xl dark:shadow-[0_0_30px_rgba(255,87,34,0.4)] flex items-center justify-center overflow-hidden transition-all duration-500"
  style={{ transformStyle: 'preserve-3d' }}
>
  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
  
  {/* FIX: Added dark:border-slate-900 and transition */}
  <div className="w-12 h-12 border border-brandOrange/50 dark:border-slate-900 rotate-45 transition-colors duration-500" /> 
  
</motion.div>


            {/* Floating accents - Glowing Orange in Dark Mode */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -30, 0], 
                  rotate: [0, 90, 180] 
                }}
                transition={{ 
                  duration: 4 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5 
                }}
                className={`absolute w-8 h-8 bg-slate-800/80 dark:bg-brandOrange/80 backdrop-blur-sm shadow-lg dark:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all duration-500 ${
                  i === 0 ? 'top-10 left-10' : 
                  i === 1 ? 'bottom-20 right-10' : 
                  i === 2 ? 'top-1/4 right-1/4' : 'bottom-1/3 left-1/4'
                }`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
