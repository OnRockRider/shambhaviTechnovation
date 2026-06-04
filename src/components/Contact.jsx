// import React from 'react';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   return (
//     <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full mt-12 border-t border-slate-800/50">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-12">
        
//         {/* Left Side: Massive Typography */}
//         <div className="flex flex-col justify-start z-10">
//           <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-6">
//             // Initiate Protocol
//           </span>
//           <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
//             Let's <br />
//             <span className="text-slate-600">Talk</span>
//           </h2>
//           <p className="mt-8 text-slate-400 font-light max-w-sm leading-relaxed text-sm md:text-base">
//             Ready to engineer your next digital asset? Drop your project specifications below and our lead architects will review your requirements within 24 hours.
//           </p>
//         </div>

//         {/* Right Side: Open Invite Minimalist Form */}
//         <div className="flex flex-col justify-center w-full z-10">
//           <form 
//             className="flex flex-col gap-10" 
//             onSubmit={(e) => e.preventDefault()}
//           >
            
//             {/* Input 1: Name */}
//             <div className="relative group">
//               <input 
//                 type="text" 
//                 id="name"
//                 className="w-full bg-transparent border-0 border-b border-slate-700 py-3 text-white focus:outline-none focus:ring-0 focus:border-brandOrange transition-colors peer"
//                 placeholder=" "
//                 required
//               />
//               <label 
//                 htmlFor="name" 
//                 className="absolute left-0 top-3 text-slate-500 text-sm font-light transition-all duration-300 pointer-events-none 
//                            peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brandOrange 
//                            peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-400"
//               >
//                 Your Name
//               </label>
//             </div>

//             {/* Input 2: Email */}
//             <div className="relative group">
//               <input 
//                 type="email" 
//                 id="email"
//                 className="w-full bg-transparent border-0 border-b border-slate-700 py-3 text-white focus:outline-none focus:ring-0 focus:border-brandOrange transition-colors peer"
//                 placeholder=" "
//                 required
//               />
//               <label 
//                 htmlFor="email" 
//                 className="absolute left-0 top-3 text-slate-500 text-sm font-light transition-all duration-300 pointer-events-none 
//                            peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brandOrange 
//                            peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-400"
//               >
//                 Email Address
//               </label>
//             </div>

//             {/* Input 3: Company */}
//             <div className="relative group">
//               <input 
//                 type="text" 
//                 id="company"
//                 className="w-full bg-transparent border-0 border-b border-slate-700 py-3 text-white focus:outline-none focus:ring-0 focus:border-brandOrange transition-colors peer"
//                 placeholder=" "
//               />
//               <label 
//                 htmlFor="company" 
//                 className="absolute left-0 top-3 text-slate-500 text-sm font-light transition-all duration-300 pointer-events-none 
//                            peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brandOrange 
//                            peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-400"
//               >
//                 Company / Organization
//               </label>
//             </div>

//             {/* Input 4: Message */}
//             <div className="relative group">
//               <textarea 
//                 id="message"
//                 rows="1"
//                 className="w-full bg-transparent border-0 border-b border-slate-700 py-3 text-white focus:outline-none focus:ring-0 focus:border-brandOrange transition-colors peer resize-none"
//                 placeholder=" "
//                 required
//               ></textarea>
//               <label 
//                 htmlFor="message" 
//                 className="absolute left-0 top-3 text-slate-500 text-sm font-light transition-all duration-300 pointer-events-none 
//                            peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brandOrange 
//                            peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-slate-400"
//               >
//                 Project Specifications
//               </label>
//             </div>

//             {/* CTA Button */}
//             <button className="mt-6 px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-none hover:bg-brandOrange hover:text-white transition-colors self-start">
//               Initialize Project
//             </button>
            
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;

/**newer contact section with white theme and box fields */

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-12">
        
        {/* Left Side: Playfair Typography */}
        <div className="flex flex-col justify-start z-10">
          <h2 className="text-6xl md:text-[5rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Let's build <br />
            <span className="text-slate-500 italic">together.</span>
          </h2>
          <p className="mt-8 text-slate-600 dark:text-slate-400 font-light max-w-md leading-relaxed text-sm md:text-base">
            Ready to engineer your next digital asset? Drop your project specifications below and our lead architects will review your requirements within 24 hours.
          </p>
        </div>

        {/* Right Side: High UX Boxed Form */}
        <div className="flex flex-col justify-center w-full z-10">
          <form 
            className="flex flex-col gap-6" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Specifications</label>
              <textarea 
                id="message"
                rows="4"
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project goals..."
              ></textarea>
            </div>

            <button className="mt-4 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm tracking-widest uppercase rounded-lg hover:bg-brandOrange dark:hover:bg-brandOrange hover:text-white transition-colors self-center lg:self-start">
              Initialize Project
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
