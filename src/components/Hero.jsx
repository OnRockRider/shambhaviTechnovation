import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // <section className="relative min-h-screen flex items-center justify-center bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500 px-6 md:px-12 overflow-hidden">
    <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-32 lg:pt-20 bg-white dark:bg-slate-950 transition-colors duration-500 px-6 md:px-12 overflow-hidden">
      
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

/**the exprement -1 */

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-32 lg:pt-20 bg-white dark:bg-slate-950 transition-colors duration-500 px-6 md:px-12 overflow-hidden">
      
//       {/* 1. Artistic Graph Paper Background */}
//       <div 
//         className="absolute inset-0 z-0 opacity-40 pointer-events-none dark:opacity-20 transition-opacity duration-500"
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

//       <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center justify-center min-h-screen lg:min-h-0 pt-20 lg:pt-0">
        
//         {/* Left Column: Editorial Typography */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full px-4 lg:px-0">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-5xl md:text-7xl lg:text-[5.5rem] text-slate-900 dark:text-white transition-colors duration-500 leading-[1.1] tracking-tight"
//             style={{ fontFamily: '"Playfair Display", serif' }}
//           >
//             <span className="block text-slate-900 dark:text-white">
//               We craft
//             </span>
//             <span className="block mt-1 italic font-normal text-brandOrange dark:text-orange-300 transition-colors duration-500">
//               digital
//             </span>
//             <span className="relative inline-block mt-2 text-slate-700 dark:text-slate-100">
//               experiences.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//             className="mt-6 lg:mt-10 text-base md:text-xl text-slate-600 dark:text-slate-400 transition-colors duration-500 max-w-xl font-light leading-relaxed"
//           >
//             Engineering custom software and premium UI/UX that scales. No fluff, just production-ready architecture mapped to perfection.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6 w-full sm:w-auto"
//           >
//             <Link 
//               to="/contact" 
//               className="inline-block text-center px-6 py-3 md:px-8 md:py-4 bg-slate-900 text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-brandOrange transition-colors duration-300 w-full sm:w-auto"
//             >
//               Start a Project
//             </Link>

//             <Link 
//               to="/work" 
//               className="inline-block text-center px-6 py-3 md:px-8 md:py-4 border border-slate-300 dark:border-slate-200 text-slate-700 dark:text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:border-brandOrange dark:hover:border-brandOrange hover:text-slate-900 dark:hover:text-white transition-colors duration-300 w-full sm:w-auto"
//             >
//               Our Work
//             </Link>
//           </motion.div>
//         </div>

//         {/* 3. Right Column: 3D Isometric Tech Stack */}
//         <div className="absolute inset-0 lg:relative flex items-center justify-center h-full lg:h-[600px] w-full pointer-events-none z-0 opacity-40 dark:opacity-100 scale-75 lg:scale-100 transition-opacity duration-500">
          
//           <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
            
//             <motion.div
//               animate={{ 
//                 rotateX: [60, 60, 60], 
//                 rotateZ: [-45, -35, -45], /* Slow gentle rotation */
//                 y: [0, -15, 0] /* Floating up and down */
//               }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//               className="relative w-56 h-56 md:w-64 md:h-64"
//               style={{ transformStyle: 'preserve-3d' }}
//             >
              
//               {/* Floor Shadow (Anchors the 3D element) */}
//               <div 
//                 className="absolute inset-0 bg-black/10 dark:bg-black/60 rounded-3xl blur-2xl"
//                 style={{ transform: 'translateZ(-140px) scale(1.2)' }}
//               />

//               {/* Layer 1: Database/Infrastructure (Bottom) */}
//               <div 
//                 className="absolute inset-0 bg-slate-100/90 dark:bg-[#0f172a]/90 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-[0_30px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_50px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col justify-end p-5 gap-3"
//                 style={{ transform: 'translateZ(-70px)' }}
//               >
//                 <div className="w-full h-2.5 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
//                 <div className="w-3/4 h-2.5 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
//                 <div className="w-1/2 h-2.5 bg-brandOrange/80 rounded-full"></div>
//               </div>

//               {/* Layer 2: API/Backend Logic (Middle) */}
//               <div 
//                 className="absolute inset-0 bg-white/60 dark:bg-slate-800/80 border border-brandOrange/30 rounded-2xl shadow-[0_20px_40px_rgba(255,87,34,0.15)] backdrop-blur-md p-5 flex flex-col gap-4 justify-center"
//                 style={{ transform: 'translateZ(10px)' }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-brandOrange/10 flex items-center justify-center border border-brandOrange/40">
//                     <div className="w-2.5 h-2.5 bg-brandOrange rounded-full animate-ping"></div>
//                   </div>
//                   <div className="flex-1 space-y-2.5">
//                     <div className="w-full h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
//                     <div className="w-5/6 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
//                   </div>
//                 </div>
//                 <div className="w-full h-px bg-gradient-to-r from-transparent via-brandOrange/50 to-transparent my-1"></div>
//                 <div className="flex gap-2.5">
//                   <div className="flex-1 h-8 bg-slate-200/50 dark:bg-slate-700/50 rounded-md border border-slate-300/50 dark:border-slate-600/50"></div>
//                   <div className="flex-1 h-8 bg-slate-200/50 dark:bg-slate-700/50 rounded-md border border-slate-300/50 dark:border-slate-600/50"></div>
//                   <div className="flex-1 h-8 bg-brandOrange/20 rounded-md border border-brandOrange/30"></div>
//                 </div>
//               </div>

//               {/* Layer 3: Frontend/UI (Top) */}
//               <div 
//                 className="absolute inset-0 bg-white/90 dark:bg-[#1e293b]/90 border border-slate-200 dark:border-brandOrange/50 rounded-2xl shadow-[0_0_50px_rgba(255,87,34,0.2)] dark:shadow-[0_0_50px_rgba(255,87,34,0.4)] backdrop-blur-xl overflow-hidden flex flex-col"
//                 style={{ transform: 'translateZ(90px)' }}
//               >
//                 {/* Browser/App Header */}
//                 <div className="h-8 w-full bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/10 flex items-center px-3 gap-1.5">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
//                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
//                 </div>
//                 {/* App Body Mockup */}
//                 <div className="p-4 flex-1 flex flex-col gap-4">
//                   {/* Hero skeleton */}
//                   <div className="w-full h-16 bg-gradient-to-br from-brandOrange/10 to-brandOrange/5 border border-brandOrange/20 rounded-lg flex items-center px-4">
//                      <div className="w-8 h-8 rounded-full bg-brandOrange/80"></div>
//                      <div className="ml-3 space-y-1.5 flex-1">
//                         <div className="w-1/2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
//                         <div className="w-1/3 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
//                      </div>
//                   </div>
//                   {/* Cards skeleton */}
//                   <div className="flex gap-3 flex-1">
//                     <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-md border border-slate-100 dark:border-white/5"></div>
//                     <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-md border border-slate-100 dark:border-white/5"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Data Beams connecting the layers */}
//               <motion.div 
//                 animate={{ opacity: [0, 1, 0], z: [-70, 90] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-1/4 top-1/4 w-1.5 h-1.5 bg-brandOrange shadow-[0_0_15px_var(--color-brandOrange)] rounded-full"
//                 style={{ transform: 'translateZ(-70px)' }}
//               />
//               <motion.div 
//                 animate={{ opacity: [0, 1, 0], z: [-70, 90] }}
//                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
//                 className="absolute right-1/4 bottom-1/4 w-1.5 h-1.5 bg-brandOrange shadow-[0_0_15px_var(--color-brandOrange)] rounded-full"
//                 style={{ transform: 'translateZ(-70px)' }}
//               />

//             </motion.div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

/**The experiment -2 */

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-32 lg:pt-20 bg-white dark:bg-slate-950 transition-colors duration-500 px-6 md:px-12 overflow-hidden">
      
//       {/* 1. Artistic Graph Paper Background */}
//       <div 
//         className="absolute inset-0 z-0 opacity-40 pointer-events-none dark:opacity-20 transition-opacity duration-500"
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

//       <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center justify-center min-h-screen lg:min-h-0 pt-20 lg:pt-0">
        
//         {/* Left Column: Editorial Typography */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full px-4 lg:px-0">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-5xl md:text-7xl lg:text-[5.5rem] text-slate-900 dark:text-white transition-colors duration-500 leading-[1.1] tracking-tight"
//             style={{ fontFamily: '"Playfair Display", serif' }}
//           >
//             <span className="block text-slate-900 dark:text-white">
//               We craft
//             </span>
//             <span className="block mt-1 italic font-normal text-brandOrange dark:text-orange-300 transition-colors duration-500">
//               digital
//             </span>
//             <span className="relative inline-block mt-2 text-slate-700 dark:text-slate-100">
//               experiences.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//             className="mt-6 lg:mt-10 text-base md:text-xl text-slate-600 dark:text-slate-400 transition-colors duration-500 max-w-xl font-light leading-relaxed"
//           >
//             Engineering custom software and premium UI/UX that scales. No fluff, just production-ready architecture mapped to perfection.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6 w-full sm:w-auto"
//           >
//             <Link 
//               to="/contact" 
//               className="inline-block text-center px-6 py-3 md:px-8 md:py-4 bg-slate-900 text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-brandOrange transition-colors duration-300 w-full sm:w-auto"
//             >
//               Start a Project
//             </Link>

//             <Link 
//               to="/work" 
//               className="inline-block text-center px-6 py-3 md:px-8 md:py-4 border border-slate-300 dark:border-slate-200 text-slate-700 dark:text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:border-brandOrange dark:hover:border-brandOrange hover:text-slate-900 dark:hover:text-white transition-colors duration-300 w-full sm:w-auto"
//             >
//               Our Work
//             </Link>
//           </motion.div>
//         </div>

//         {/* 3. Right Column: 3D Isometric Tech Stack */}
//         <div className="absolute inset-0 lg:relative flex items-center justify-center h-full lg:h-[600px] w-full pointer-events-none z-0 opacity-30 dark:opacity-100 scale-75 lg:scale-100 transition-opacity duration-500">
          
//           <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
            
//             {/* Main 3D Container */}
//             <motion.div
//               animate={{ rotateY: [-8, 8, -8], rotateX: [4, -4, 4] }}
//               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//               className="relative w-full max-w-md h-[400px]"
//               style={{ transformStyle: 'preserve-3d' }}
//             >
              
//               {/* Element 1: The Analytics Dashboard (Back Layer) */}
//               <motion.div
//                  animate={{ y: [0, -10, 0] }}
//                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                  className="absolute top-4 left-0 right-12 h-56 bg-white/60 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-2xl p-5 flex flex-col gap-4"
//                  style={{ transform: 'translateZ(-30px)' }}
//               >
//                  {/* Header Skeleton */}
//                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700/50 pb-3">
//                    <div className="w-1/3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
//                    <div className="w-8 h-8 rounded-full bg-brandOrange/20 border border-brandOrange/30"></div>
//                  </div>
//                  {/* Chart Skeleton */}
//                  <div className="flex items-end gap-2 flex-1 pt-2">
//                    <div className="w-1/6 h-1/3 bg-slate-200 dark:bg-slate-700 rounded-t-sm"></div>
//                    <div className="w-1/6 h-2/3 bg-slate-200 dark:bg-slate-700 rounded-t-sm"></div>
//                    <div className="w-1/6 h-1/2 bg-slate-200 dark:bg-slate-700 rounded-t-sm"></div>
//                    <div className="w-1/6 h-full bg-brandOrange/80 rounded-t-sm shadow-[0_0_15px_rgba(255,87,34,0.4)]"></div>
//                    <div className="w-1/6 h-3/4 bg-slate-200 dark:bg-slate-700 rounded-t-sm"></div>
//                  </div>
//               </motion.div>

//               {/* Element 2: The IDE / Code Window (Front Layer) */}
//               <motion.div
//                 animate={{ y: [0, 15, 0] }}
//                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                 className="absolute bottom-8 -right-4 w-64 h-40 bg-[#0a0f1c]/95 backdrop-blur-2xl border border-slate-700 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_40px_rgba(255,87,34,0.1)] overflow-hidden flex flex-col"
//                 style={{ transform: 'translateZ(60px)' }}
//               >
//                 {/* Mac Window Controls */}
//                 <div className="h-8 w-full bg-white/5 flex items-center px-3 gap-1.5 border-b border-white/10">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
//                   <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
//                 </div>
//                 {/* Code Lines */}
//                 <div className="p-4 flex flex-col gap-2.5">
//                   <div className="flex gap-2">
//                     <div className="w-8 h-2 bg-pink-500/80 rounded-full"></div>
//                     <div className="w-16 h-2 bg-blue-400/80 rounded-full"></div>
//                     <div className="w-12 h-2 bg-slate-500/80 rounded-full"></div>
//                   </div>
//                   <div className="flex gap-2 pl-4">
//                     <div className="w-10 h-2 bg-brandOrange rounded-full"></div>
//                     <div className="w-20 h-2 bg-green-400/80 rounded-full"></div>
//                   </div>
//                   <div className="flex gap-2 pl-8">
//                     <div className="w-14 h-2 bg-amber-300/80 rounded-full"></div>
//                   </div>
//                   <div className="flex gap-2">
//                     <div className="w-6 h-2 bg-slate-500/80 rounded-full"></div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Element 3: Floating UI Component (Action Button) */}
//               <motion.div
//                  animate={{ y: [0, -12, 0] }}
//                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
//                  className="absolute top-1/2 -left-8 w-16 h-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-2xl shadow-xl flex items-center justify-center"
//                  style={{ transform: 'translateZ(90px)' }}
//               >
//                 <div className="w-8 h-8 rounded-full border-2 border-brandOrange border-t-transparent animate-spin"></div>
//               </motion.div>

//               {/* Depth Shadow */}
//               <div 
//                 className="absolute -bottom-10 left-10 right-10 h-10 bg-black/20 dark:bg-black/60 blur-xl rounded-full"
//                 style={{ transform: 'translateZ(-100px)' }}
//               />

//             </motion.div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

/**Experiment-3 */

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-4 md:pt-32 lg:pt-20 bg-white dark:bg-slate-950 transition-colors duration-500 px-6 md:px-12 overflow-hidden">
      
//       {/* 1. Artistic Graph Paper Background */}
//       <div 
//         className="absolute inset-0 z-0 opacity-40 pointer-events-none dark:opacity-20 transition-opacity duration-500"
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

//       <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center justify-center min-h-screen lg:min-h-0 pt-20 lg:pt-0">
        
//         {/* Left Column: Editorial Typography */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full px-4 lg:px-0">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-5xl md:text-7xl lg:text-[5.5rem] text-slate-900 dark:text-white transition-colors duration-500 leading-[1.1] tracking-tight"
//             style={{ fontFamily: '"Playfair Display", serif' }}
//           >
//             <span className="block text-slate-900 dark:text-white">
//               We craft
//             </span>
//             <span className="block mt-1 italic font-normal text-brandOrange dark:text-orange-300 transition-colors duration-500">
//               digital
//             </span>
//             <span className="relative inline-block mt-2 text-slate-700 dark:text-slate-100">
//               experiences.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//             className="mt-6 lg:mt-10 text-base md:text-xl text-slate-600 dark:text-slate-400 transition-colors duration-500 max-w-xl font-light leading-relaxed"
//           >
//             Engineering custom software and premium UI/UX that scales. No fluff, just production-ready architecture mapped to perfection.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6 w-full sm:w-auto"
//           >
//             <Link 
//               to="/contact" 
//               className="inline-block text-center px-6 py-3 md:px-8 md:py-4 bg-slate-900 text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-brandOrange transition-colors duration-300 w-full sm:w-auto"
//             >
//               Start a Project
//             </Link>

//             <Link 
//               to="/work" 
//               className="inline-block text-center px-6 py-3 md:px-8 md:py-4 border border-slate-300 dark:border-slate-200 text-slate-700 dark:text-white font-medium text-xs md:text-sm tracking-widest uppercase hover:border-brandOrange dark:hover:border-brandOrange hover:text-slate-900 dark:hover:text-white transition-colors duration-300 w-full sm:w-auto"
//             >
//               Our Work
//             </Link>
//           </motion.div>
//         </div>

//         {/* 3. Right Column: 3D Isometric Tech Stack */}
//         {/* 3. Right Column: The 3D Floating Ecosystem (Bento Grid) */}
//         <div className="absolute inset-0 lg:relative flex items-center justify-center h-full lg:h-[600px] w-full pointer-events-none z-0 opacity-40 dark:opacity-100 scale-75 lg:scale-100 transition-opacity duration-500">
          
//           <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
            
//             {/* The 3D Angled Grid Plane */}
//             <motion.div
//               animate={{ 
//                 rotateX: [55, 58, 55], 
//                 rotateZ: [-35, -35, -35], 
//                 y: [0, -10, 0] 
//               }}
//               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//               className="grid grid-cols-2 gap-4 md:gap-6 w-64 md:w-80"
//               style={{ transformStyle: 'preserve-3d' }}
//             >
              
//               {/* Floor Shadow for the whole grid */}
//               <div 
//                 className="absolute -inset-10 bg-black/10 dark:bg-black/40 blur-2xl rounded-[3rem]"
//                 style={{ transform: 'translateZ(-100px)' }}
//               />

//               {/* Tile 1: The UI Component (Top Left) */}
//               <motion.div
//                  animate={{ z: [0, 20, 0] }}
//                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                  className="col-span-1 aspect-square bg-white/80 dark:bg-[#1e293b]/90 backdrop-blur-xl border border-slate-200 dark:border-brandOrange/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(255,87,34,0.15)] p-4 flex flex-col justify-between"
//               >
//                  <div className="w-10 h-10 bg-brandOrange/10 rounded-full flex items-center justify-center border border-brandOrange/20">
//                     <div className="w-4 h-4 bg-brandOrange rounded-full animate-pulse"></div>
//                  </div>
//                  <div className="space-y-2 w-full">
//                     <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
//                     <div className="w-2/3 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
//                  </div>
//               </motion.div>

//               {/* Tile 2: The Code Engine (Top Right) */}
//               <motion.div
//                  animate={{ z: [20, 0, 20] }}
//                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                  className="col-span-1 aspect-square bg-[#0a0f1c]/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-4 flex flex-col gap-2 relative overflow-hidden"
//               >
//                 {/* Glowing edge effect */}
//                 <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 blur-xl rounded-full"></div>
                
//                 <div className="flex gap-1.5 mb-1">
//                   <div className="w-2 h-2 rounded-full bg-slate-600"></div>
//                   <div className="w-2 h-2 rounded-full bg-slate-600"></div>
//                 </div>
//                 <div className="w-3/4 h-1.5 bg-pink-500/80 rounded-full"></div>
//                 <div className="w-full h-1.5 bg-blue-400/80 rounded-full"></div>
//                 <div className="w-5/6 h-1.5 bg-brandOrange/80 rounded-full"></div>
//                 <div className="w-1/2 h-1.5 bg-green-400/80 rounded-full mt-2"></div>
//               </motion.div>

//               {/* Tile 3: The Data Analytics Chart (Bottom Left - Spans 2 columns if you want, but kept 1 for grid) */}
//               <motion.div
//                  animate={{ z: [10, 30, 10] }}
//                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//                  className="col-span-2 h-32 bg-white/60 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-xl p-4 flex items-end gap-2"
//               >
//                  {/* Bar Chart Skeletons */}
//                  <div className="w-full h-1/4 bg-slate-300 dark:bg-slate-700 rounded-t-sm transition-all hover:h-1/2"></div>
//                  <div className="w-full h-2/4 bg-slate-300 dark:bg-slate-700 rounded-t-sm transition-all hover:h-3/4"></div>
//                  <div className="w-full h-full bg-brandOrange/80 rounded-t-sm shadow-[0_0_15px_rgba(255,87,34,0.4)]"></div>
//                  <div className="w-full h-3/4 bg-slate-300 dark:bg-slate-700 rounded-t-sm"></div>
//                  <div className="w-full h-1/3 bg-slate-300 dark:bg-slate-700 rounded-t-sm"></div>
//                  <div className="w-full h-2/3 bg-slate-300 dark:bg-slate-700 rounded-t-sm"></div>
//               </motion.div>

//               {/* Floating Abstract Accents */}
//               <motion.div 
//                 animate={{ z: [40, 80, 40], rotateZ: [0, 90, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -top-8 -right-8 w-12 h-12 bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center"
//               >
//                  <div className="w-4 h-4 bg-brandOrange rotate-45 rounded-sm"></div>
//               </motion.div>

//             </motion.div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;