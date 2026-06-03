// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     // Changed bg to slate-50 for the light theme
//     <section className="relative min-h-screen flex items-center justify-center bg-slate-50 px-6 md:px-12 overflow-hidden">
      
//       {/* Subtle Ambient Glow - Softened for light background */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandOrange/10 rounded-full blur-[150px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 lg:mt-0">
        
//         {/* Left Column: Typography & CTA */}
//         <div className="flex flex-col items-start z-20">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             // Reduced sizes and changed font-black to font-bold. Text is now slate-900.
//             className="text-4xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-[1.1]"
//           >
//             WE BUILD <br />
//             <span className="text-slate-400 font-medium">DIGITAL</span> <br />
            
//             <span className="relative inline-block mt-2 pb-2">
//               EXPERIENCES
              
//               {/* Sleek Animated Underline Effect */}
//               <motion.div
//                 className="absolute bottom-0 left-0 h-2 bg-brandOrange rounded-full"
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//               />
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//             // Adjusted text color for readability on light background
//             className="mt-8 text-lg md:text-xl text-slate-600 max-w-xl font-light leading-relaxed"
//           >
//             Engineering custom software and premium UI/UX that scales. No fluff, just production-ready architecture.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="mt-10 flex flex-col sm:flex-row gap-6"
//           >
//             <button className="px-8 py-4 bg-brandOrange text-white font-bold text-sm tracking-widest uppercase hover:bg-orange-600 transition-colors">
//               Start a Project
//             </button>
//             <button className="px-8 py-4 border border-slate-300 text-slate-700 font-bold text-sm tracking-widest uppercase hover:border-slate-900 hover:text-slate-900 transition-colors">
//               Our Work
//             </button>
//           </motion.div>
//         </div>

//         {/* Right Column: Abstract Data/Tech Visual - Inverted for light theme */}
//         <div className="relative hidden lg:flex items-center justify-center h-[600px] w-full pointer-events-none">
          
//           {/* Rotating Outer Dashed Ring */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[450px] h-[450px] border border-slate-200 rounded-full border-dashed"
//           />

//           {/* Counter-Rotating Inner Ring */}
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[300px] h-[300px] border border-slate-200 rounded-full"
//           >
//              {/* Orbiting Node */}
//              <div className="absolute top-0 left-1/2 w-3 h-3 bg-brandOrange rounded-full shadow-[0_0_10px_#FF5722] -translate-x-1/2 -translate-y-1/2" />
//           </motion.div>

//           {/* Central Analytics Core matrix */}
//           <div className="relative w-full h-full flex items-center justify-center">
//             {/* Cluster Nodes */}
//             {[...Array(6)].map((_, i) => {
//               const angle = i * 60 * (Math.PI / 180);
//               const radius = 90;
//               return (
//                 <motion.div
//                   key={i}
//                   className="absolute"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{
//                     opacity: [0.3, 0.8, 0.3],
//                     scale: [0.8, 1.2, 0.8],
//                     x: Math.cos(angle) * radius,
//                     y: Math.sin(angle) * radius,
//                   }}
//                   transition={{
//                     duration: 3 + (i % 3),
//                     repeat: Infinity,
//                     delay: i * 0.2,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <div className="w-2 h-2 bg-brandOrange/80 rounded-full" />
//                   {/* Faint connecting line to center */}
//                   <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-t from-brandOrange/30 to-transparent -translate-x-1/2 origin-bottom rotate-[var(--angle)]" style={{ '--angle': `${(i * 60) + 90}deg` }}/>
//                 </motion.div>
//               );
//             })}

//             {/* Glowing Center Hub */}
//             <motion.div
//               animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.6, 1, 0.6] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute w-20 h-20 border border-brandOrange/20 rounded-full flex items-center justify-center bg-white shadow-[inset_0_0_20px_rgba(255,87,34,0.1)]"
//             >
//               <div className="w-4 h-4 bg-brandOrange rounded-full shadow-[0_0_15px_#FF5722]" />
//             </motion.div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-[#faf9f6] px-6 md:px-12 overflow-hidden">
      
//       {/* 1. Artistic Graph Paper Background with Radial Fade */}
//       <div 
//         className="absolute inset-0 z-0 opacity-40 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #cbd5e1 1px, transparent 1px),
//             linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
//           `,
//           backgroundSize: '40px 40px',
//           maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
//           WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)'
//         }}
//       />

//       <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 lg:mt-0">
        
//         {/* Left Column: Editorial Typography */}
//         <div className="flex flex-col items-start z-20">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-5xl md:text-7xl lg:text-[5.5rem] text-slate-900 leading-[1.1] tracking-tight"
//             style={{ fontFamily: '"Playfair Display", serif' }}
//           >
//             We craft <br />
//             <span className="text-slate-500 italic font-normal">digital</span> <br />
            
//             <span className="relative inline-block mt-2">
//               experiences.
              
//               {/* 2. Rough Sketch Pen Underline */}
//               <motion.svg
//                 className="absolute -bottom-2 left-0 w-full h-[30px] pointer-events-none overflow-visible"
//                 viewBox="0 0 300 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="none"
//               >
//                 {/* Main rough stroke */}
//                 <motion.path
//                   d="M 5 15 Q 50 25 100 12 T 200 18 T 295 10"
//                   stroke="#FF5722"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   initial={{ pathLength: 0, opacity: 0 }}
//                   animate={{ pathLength: 1, opacity: 1 }}
//                   transition={{ duration: 0.9, delay: 0.6, ease: "easeInOut" }}
//                 />
//                 {/* Secondary overlapping scribble to make it look like a marker */}
//                 <motion.path
//                   d="M 15 18 Q 70 20 150 15 T 280 14"
//                   stroke="#FF5722"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   initial={{ pathLength: 0, opacity: 0 }}
//                   animate={{ pathLength: 1, opacity: 0.7 }}
//                   transition={{ duration: 0.9, delay: 0.75, ease: "easeInOut" }}
//                 />
//               </motion.svg>
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//             className="mt-10 text-lg md:text-xl text-slate-600 max-w-xl font-light leading-relaxed"
//           >
//             Engineering custom software and premium UI/UX that scales. No fluff, just production-ready architecture mapped to perfection.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="mt-12 flex flex-col sm:flex-row gap-6"
//           >
//             {/* Kept buttons clean but matched the new aesthetic */}
//             <button className="px-8 py-4 bg-slate-900 text-white font-medium text-sm tracking-widest uppercase hover:bg-brandOrange transition-colors duration-300">
//               Start a Project
//             </button>
//             <button className="px-8 py-4 border border-slate-300 text-slate-700 font-medium text-sm tracking-widest uppercase hover:border-slate-900 hover:text-slate-900 transition-colors duration-300">
//               Our Work
//             </button>
//           </motion.div>
//         </div>

//         {/* 3. Right Column: Dark Geometric "Spline-like" Element */}
//         <div className="relative hidden lg:flex items-center justify-center h-[600px] w-full pointer-events-none">
          
//           <div className="relative w-full h-full flex items-center justify-center">
//             {/* Heavy Dark Outer Ring */}
//             <motion.div
//               animate={{ rotateX: 360, rotateY: 180 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute w-[400px] h-[400px] border-4 border-slate-800 rounded-full"
//               style={{ transformStyle: 'preserve-3d' }}
//             />

//             {/* Intersecting Dark Ring */}
//             <motion.div
//               animate={{ rotateY: -360, rotateX: -180 }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               className="absolute w-[400px] h-[400px] border-2 border-slate-700 rounded-full"
//               style={{ transformStyle: 'preserve-3d' }}
//             />

//             {/* Solid Dark Geometric Core */}
//             <motion.div
//               animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute w-32 h-32 bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {/* Inner highlight to give it a 3D shaded look */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
//               <div className="w-12 h-12 border border-brandOrange/50 rotate-45" />
//             </motion.div>
            
//             {/* Floating graphite accents */}
//             {[...Array(4)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 animate={{ 
//                   y: [0, -30, 0], 
//                   rotate: [0, 90, 180] 
//                 }}
//                 transition={{ 
//                   duration: 4 + i, 
//                   repeat: Infinity, 
//                   ease: "easeInOut",
//                   delay: i * 0.5 
//                 }}
//                 className={`absolute w-8 h-8 bg-slate-800/80 backdrop-blur-sm shadow-lg ${
//                   i === 0 ? 'top-10 left-10' : 
//                   i === 1 ? 'bottom-20 right-10' : 
//                   i === 2 ? 'top-1/4 right-1/4' : 'bottom-1/3 left-1/4'
//                 }`}
//               />
//             ))}
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#faf9f6] px-6 md:px-12 overflow-hidden">
      
      {/* 1. Artistic Graph Paper Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
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

      {/* Changed to flex-col on mobile, grid on desktop to handle the absolute positioning trick */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center justify-center min-h-screen lg:min-h-0 pt-20 lg:pt-0">
        
        {/* Left Column: Editorial Typography */}
        {/* Mobile: Centered text and items. Desktop: Left-aligned. */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full px-4 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] text-slate-900 leading-[1.1] tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            We craft <br />
            <span className="text-slate-500 italic font-normal">digital</span> <br />
            
            {/* Removed the SVG underline completely as requested */}
            <span className="relative inline-block mt-2">
              experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 lg:mt-10 text-base md:text-xl text-slate-600 max-w-xl font-light leading-relaxed"
          >
            Engineering custom software and premium UI/UX that scales. No fluff, just production-ready architecture mapped to perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            // Mobile: Buttons are centered, take full width, smaller padding. Desktop: Auto width, larger.
            className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6 w-full sm:w-auto"
          >
            <button className="px-6 py-3 md:px-8 md:py-4 bg-slate-900 text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-brandOrange transition-colors duration-300 w-full sm:w-auto">
              <a href='./contact'>
              Start a Project
              </a>
            </button>
            <button className="px-6 py-3 md:px-8 md:py-4 border border-slate-300 text-slate-700 font-medium text-xs md:text-sm tracking-widest uppercase hover:border-slate-900 hover:text-slate-900 transition-colors duration-300 w-full sm:w-auto">
              <a href='./work'>
              Our Work
              </a>
            </button>
          </motion.div>
        </div>

        {/* 3. Right Column: Dark Geometric Element */}
        {/* Mobile: Absolute position (behind text), 15% opacity, scaled down. Desktop: Relative position (side-by-side), 100% opacity. */}
        <div className="absolute inset-0 lg:relative flex items-center justify-center h-full lg:h-[600px] w-full pointer-events-none z-0 opacity-15 lg:opacity-100 scale-75 lg:scale-100">
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Heavy Dark Outer Ring */}
            <motion.div
              animate={{ rotateX: 360, rotateY: 180 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border-4 border-slate-800 rounded-full"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Intersecting Dark Ring */}
            <motion.div
              animate={{ rotateY: -360, rotateX: -180 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border-2 border-slate-700 rounded-full"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Solid Dark Geometric Core */}
            <motion.div
              animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
              <div className="w-12 h-12 border border-brandOrange/50 rotate-45" />
            </motion.div>
            
            {/* Floating graphite accents */}
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
                className={`absolute w-8 h-8 bg-slate-800/80 backdrop-blur-sm shadow-lg ${
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