
// 1 
/**newer contact section with white theme and box fields */

// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-12">
        
//         {/* Left Side: Playfair Typography */}
//         <div className="flex flex-col justify-start z-10">
//           <h2 className="text-6xl md:text-[5rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
//             Let's build <br />
//             <span className="text-slate-500 italic">together.</span>
//           </h2>
//           <p className="mt-8 text-slate-600 dark:text-slate-400 font-light max-w-md leading-relaxed text-sm md:text-base">
//             Ready to engineer your next digital asset? Drop your project specifications below and our lead architects will review your requirements within 24 hours.
//           </p>
//         </div>

//         {/* Right Side: High UX Boxed Form */}
//         <div className="flex flex-col justify-center w-full z-10">
//           <form 
//             className="flex flex-col gap-6" 
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <div className="flex flex-col">
//               <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
//               <input 
//                 type="text" 
//                 id="name"
//                 className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
//               <input 
//                 type="email" 
//                 id="email"
//                 className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Specifications</label>
//               <textarea 
//                 id="message"
//                 rows="4"
//                 className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all resize-none"
//                 placeholder="Tell us about your project goals..."
//               ></textarea>
//             </div>

//             <button className="mt-4 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm tracking-widest uppercase rounded-lg hover:bg-brandOrange dark:hover:bg-brandOrange hover:text-white transition-colors self-center lg:self-start">
//               Initialize Project
//             </button>
            
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;



// 2
// import React from 'react';

// const Contact = () => {
//   return (
//     /* LAYOUT FIXES:
//       1. Added `min-h-[80vh]` so the section takes up most of the screen, pushing the footer to the very bottom.
//       2. Added `flex items-center` so the text and form stay perfectly centered vertically.
//       3. Added `bg-[#faf9f6] dark:bg-slate-950` so it matches your site's background colors perfectly.
//     */
//     <section id="contact" className="min-h-[80vh] flex items-center bg-[#faf9f6] dark:bg-slate-950 py-24 px-6 md:px-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
//       <div className="max-w-7xl mx-auto w-full">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
//           {/* Left Side: Playfair Typography */}
//           <div className="flex flex-col justify-center z-10">
//             <h2 className="text-6xl md:text-[5rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
//               Let's build <br />
//               <span className="text-slate-500 italic">together.</span>
//             </h2>
//             <p className="mt-8 text-slate-600 dark:text-slate-400 font-light max-w-md leading-relaxed text-sm md:text-base">
//               Ready to engineer your next digital asset? Drop your project specifications below and our lead architects will review your requirements within 24 hours.
//             </p>
//           </div>

//           {/* Right Side: High UX Boxed Form */}
//           <div className="flex flex-col justify-center w-full z-10">
//             <form 
//               className="flex flex-col gap-6" 
//               onSubmit={(e) => e.preventDefault()}
//             >
//               <div className="flex flex-col">
//                 <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
//                 <input 
//                   type="text" 
//                   id="name"
//                   className="w-full bg-white dark:bg-[#0a0f1c] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
//                 <input 
//                   type="email" 
//                   id="email"
//                   className="w-full bg-white dark:bg-[#0a0f1c] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Specifications</label>
//                 <textarea 
//                   id="message"
//                   rows="4"
//                   className="w-full bg-white dark:bg-[#0a0f1c] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all resize-none"
//                   placeholder="Tell us about your project goals..."
//                 ></textarea>
//               </div>

//               <button className="mt-4 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm tracking-widest uppercase rounded-lg hover:bg-brandOrange dark:hover:bg-brandOrange hover:text-white transition-colors self-center lg:self-start">
//                 Initialize Project
//               </button>
              
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// 3
import React from 'react';

const Contact = () => {
  return (
    /* 
      FIXES APPLIED:
      1. Changed min-h-[80vh] to min-h-screen to permanently fix the tablet gap.
      2. Adjusted padding (py-16 md:py-20 lg:py-24) for better tablet spacing.
    */
    <section id="contact" className="min-h-screen flex items-center bg-[#faf9f6] dark:bg-slate-950 py-16 md:py-20 lg:py-24 px-6 md:px-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* On tablet (md), this stays 1 column. On desktop (lg), it splits to 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          
          {/* Left Side: Playfair Typography */}
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Let's build <br />
              <span className="text-slate-500 italic">together.</span>
            </h2>
            <p className="mt-6 md:mt-8 text-slate-600 dark:text-slate-400 font-light max-w-md leading-relaxed text-sm md:text-base">
              Ready to engineer your next digital asset? Drop your project specifications below and our lead architects will review your requirements within 24 hours.
            </p>
          </div>

          {/* Right Side: High UX Boxed Form */}
          <div className="flex flex-col justify-center w-full z-10">
            <form 
              className="flex flex-col gap-5 md:gap-6" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-white dark:bg-[#0a0f1c] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-white dark:bg-[#0a0f1c] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Specifications</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full bg-white dark:bg-[#0a0f1c] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>

              <button className="mt-2 md:mt-4 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm tracking-widest uppercase rounded-lg hover:bg-brandOrange dark:hover:bg-brandOrange hover:text-white transition-colors self-center lg:self-start w-full md:w-auto">
                Initialize Project
              </button>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
