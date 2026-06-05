// // final;
// import React from "react";
// import { Link } from "react-router-dom";

// const projects = [
//   {
//     id: 1, 
//     title: "HealthSync Platform",
//     category: "Healthcare IT",
//     tech: ["React", "Node.js", "PostgreSQL", "AWS"],
//     bgClass: "bg-[#050b14]",
//     link: "" ,// Added a placeholder link for future routing,
//     image: ""
//   },
//   {
//     id: 2,
//     title: "Fintech Dashboard",
//     category: "Financial Systems",
//     tech: ["Angular", "Tailwind", "Python", "Docker"],
//     bgClass: "bg-[#0a0a0a]",
//     link: "" ,// Added a placeholder link for future routing,
//     image: ""
//   },
//   {
//     id: 2,
//     title: "Fintech Dashboard",
//     category: "Financial Systems",
//     tech: ["Angular", "Tailwind", "Python", "Docker"],
//     bgClass: "bg-[#0a0a0a]",
//     link: "" ,// Added a placeholder link for future routing,
//     image: ""
//   }
// ];  

// const FeaturedProjects = () => {
//   return (
//     <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
//       <div className="mb-16">
//         <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white leading-none tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
//           Selected Work
//         </h2>
//       </div>

//       <div className="flex flex-col gap-8 md:gap-12">
//         {projects.map((project) => (
//           /* CHANGED TO <a> TAG: 
//              Added 'block' and 'cursor-pointer' to make the whole area clickable.
//              Added 'hover:-translate-y-2' and 'hover:shadow-2xl' for visual feedback.
//           */
//           <a 
//             key={project.id}
//             href={project.link}
//             onClick={(e) => {
//               // Optional: Remove this preventDefault when you add real links
//               if (project.link === "#") e.preventDefault(); 
//             }}
//             className={`group relative w-full h-[260px] md:h-[500px] ${project.bgClass} rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500`}
//           >
//             {/* className={`block cursor-pointer group relative w-full h-[350px] md:h-[500px] ${project.bgClass} rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brandOrange/5 hover:border-slate-700`} */}
//             {/* Faint Grid Background */}
//             {/* <div 
//               className="absolute inset-0 opacity-20 pointer-events-none" 
//               style={{
//                 backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
//                 backgroundSize: '40px 40px'
//               }}
//             ></div> */}
// {/* Photo Background with Dark Overlay */}
//             <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl z-0">
//               <img 
//                 src={project.image} 
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               {/* Dark overlay to keep text readable */}
//               <div className="absolute inset-0 bg-[#0a0f1c]/60 group-hover:bg-[#0a0f1c]/40 transition-colors duration-500"></div>
//             </div>
//             {/* Content Container */}
//             <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 
//                             opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
//                             transition-all duration-300 ease-in-out
//                             bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/90 to-transparent">
              
//               <span className="text-[#ff5a36] text-xs md:text-sm font-bold tracking-wider uppercase mb-2 block">
//                 {project.category}
//               </span>
              
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">
//                 {project.title}
//               </h2>
              
//               {/* Tech Stack Pills */}
//               <div className="flex flex-wrap gap-2 md:gap-3">
//                 {project.tech.map((techItem, index) => (
//                   <span 
//                     key={index}
//                     className="px-3 md:px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs md:text-sm transition-colors hover:border-slate-500 hover:text-white"
//                   >
//                     {techItem}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>

//       <div className="mt-16 flex justify-center">
//         <Link 
//           to="/work/explore"
//           onClick={() => window.scrollTo(0, 0)}
//           className="group relative inline-flex items-center justify-center px-10 py-4 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 uppercase tracking-widest text-sm font-medium overflow-hidden"
//         >
//           <span className="absolute inset-0 bg-brandOrange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
//           <span className="relative z-10 group-hover:text-white transition-colors duration-300 delay-75">
//             Explore
//           </span>
//         </Link>
//       </div>
      
//     </section>
//   );
// };

// export default FeaturedProjects;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// // Added a 4th project here so the 2-column grid is perfectly balanced. 
// // You can replace these placeholder images/links with your client's actual data.
// const projects = [
//   {
//     id: 1, 
//     title: "Beige AI",
//     category: "Content Production Ecosystem",
//     tech: ["Media Operations Engine", "Real-time Pricing"],
//     bgClass: "bg-[#050b14]",
//     link: "/work/explore",
//     image: "/images/move-beige.app.png" // Points to your public folder!
//   },
//   {
//     id: 2,
//     title: "Wikipoint Artisans",
//     category: "AI Digital Presence",
//     tech: ["Voice-to-Website", "Smart Assistant"],
//     bgClass: "bg-[#0a0a0a]",
//     link: "/work/explore",
//     image: "/images/move-ayumanager.png" // Points to your public folder!
//   }
// ];

// const FeaturedProjects = () => {
//   return (
//     <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
//       <div className="mb-16">
//         <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-4">
//           // Case Studies
//         </span>
//         <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white leading-none tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
//           Our Work
//         </h2>
//       </div>

//       {/* The New 2-Column Responsive Grid */}
//       {/* The New 2-Column Responsive Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             /* PERFORMANCE FIX 1: Increased margin so it triggers earlier, preventing scroll lag */
//             viewport={{ once: true, margin: "0px 0px -50px 0px" }} 
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             /* PERFORMANCE FIX 2: Forces the browser to use the GPU for this animation */
//             className="will-change-transform transform-gpu"
//           >
//             {/* Clickable Card wrapper using Link */}
//             {/* <Link 
//               to={project.link}
//               onClick={() => window.scrollTo(0, 0)}
//               className={`group relative block w-full h-[320px] md:h-[400px] ${project.bgClass} rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500`}
//             > */}
//             <Link 
//   to={project.link}
//   onClick={() => window.scrollTo(0, 0)}
//   className={`group relative block w-full h-[320px] md:h-[400px] ${project.bgClass} rounded-2xl overflow-hidden 
//               shadow-xl dark:shadow-[0_15px_40px_rgba(255,87,34,0.08)] 
//               /* THE FIX: Frosted orange default, bright orange on hover */
//               border border-slate-200 dark:border-brandOrange/30 hover:dark:border-brandOrange/80
//               transition-all duration-500`}
// >
//               {/* Photo Background with Hover-Scroll */}
//               <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   /* PERFORMANCE FIX 3: Added transform-gpu to the image
//                     DESIGN FIX: Changed duration-[4000ms] to duration-[8000ms] to cut speed in half 
//                   */
//                   className="w-full h-full object-cover object-top transition-all duration-[8000ms] ease-in-out group-hover:object-bottom transform-gpu will-change-[object-position]"
//                 />
//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-[#0a0f1c]/0 group-hover:bg-[#0a0f1c]/80 transition-colors duration-500"></div>
//               </div>

//               {/* Content Container */}
//               <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10
//                               transition-all duration-500 ease-out
//                               opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                
//                 <span className="text-[#ff5a36] text-xs font-bold tracking-wider uppercase mb-2 block">
//                   {project.category}
//                 </span>
                
//                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
//                   {project.title}
//                 </h3>
                
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((techItem, i) => (
//                     <span 
//                       key={i}
//                       className="px-3 py-1 rounded-md border border-slate-700 bg-slate-800/50 text-slate-300 text-[10px] md:text-xs uppercase tracking-wider transition-colors group-hover:border-slate-500 group-hover:text-white"
//                     >
//                       {techItem}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {/* Explore Button */}
//       <div className="mt-16 flex justify-center">
//         <Link 
//           to="/work/explore"
//           onClick={() => window.scrollTo(0, 0)}
//           className="group relative inline-flex items-center justify-center px-10 py-4 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 uppercase tracking-widest text-sm font-medium overflow-hidden transition-colors duration-500 hover:text-white hover:border-brandOrange z-10"
//         >
//           <span className="absolute w-[300px] h-[300px] bg-brandOrange rounded-full -left-[150%] top-[100%] transition-all duration-700 ease-out group-hover:-top-[50px] group-hover:-left-[50px] -z-10"></span>
          
//           <span className="relative z-10">
//             View More
//           </span>
//         </Link>
//       </div>
      
//     </section>
//   );
// };

// export default FeaturedProjects;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Project Data
const projects = [
  {
    id: 1, 
    title: "Beige AI",
    category: "Content Production Ecosystem",
    tech: ["Media Operations Engine", "Real-time Pricing"],
    bgClass: "bg-[#050b14]",
    link: "/work/explore",
    image: "/images/move-beige.app.png" 
  },
  {
    id: 2,
    title: "Wikipoint Artisans",
    category: "AI Digital Presence",
    tech: ["Voice-to-Website", "Smart Assistant"],
    bgClass: "bg-[#0a0a0a]",
    link: "/work/explore",
    image: "/images/move-ayumanager.png" 
  }
];

const FeaturedProjects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
      <div className="mb-16">
        <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-4">
          // Case Studies
        </span>
        <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white leading-none tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
          Our Work
        </h2>
      </div>

      {/* The 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            /* PERFORMANCE FIX: Prevents scroll lag */
            viewport={{ once: true, margin: "0px 0px -50px 0px" }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
            /* PERFORMANCE FIX: Hardware Acceleration */
            className="will-change-transform transform-gpu"
          >
            {/* Clickable Card Wrapper */}
            <Link 
              to={project.link}
              onClick={() => window.scrollTo(0, 0)}
              className={`group relative block w-full h-[320px] md:h-[400px] ${project.bgClass} rounded-2xl overflow-hidden 
                          shadow-xl dark:shadow-[0_15px_40px_rgba(255,87,34,0.08)] 
                          /* THE FIX: Frosted orange default, bright orange on hover */
                          border border-slate-200 dark:border-brandOrange/30 hover:dark:border-brandOrange/80
                          transition-all duration-500`}
            >
              {/* Photo Background with Hover-Scroll */}
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  /* PERFORMANCE & DESIGN FIX: 8-second smooth scroll */
                  className="w-full h-full object-cover object-top transition-all duration-[8000ms] ease-in-out group-hover:object-bottom transform-gpu will-change-[object-position]"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0a0f1c]/0 group-hover:bg-[#0a0f1c]/80 transition-colors duration-500"></div>
              </div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10
                              transition-all duration-500 ease-out
                              opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                
                <span className="text-[#ff5a36] text-xs font-bold tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-md border border-slate-700 bg-slate-800/50 text-slate-300 text-[10px] md:text-xs uppercase tracking-wider transition-colors group-hover:border-slate-500 group-hover:text-white"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-16 flex justify-center">
        <Link 
          to="/work/explore"
          onClick={() => window.scrollTo(0, 0)}
          className="group relative inline-flex items-center justify-center px-10 py-4 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 uppercase tracking-widest text-sm font-medium overflow-hidden transition-colors duration-500 hover:text-white hover:border-brandOrange z-10"
        >
          <span className="absolute w-[300px] h-[300px] bg-brandOrange rounded-full -left-[150%] top-[100%] transition-all duration-700 ease-out group-hover:-top-[50px] group-hover:-left-[50px] -z-10"></span>
          
          <span className="relative z-10">
            View More
          </span>
        </Link>
      </div>
      
    </section>
  );
};

export default FeaturedProjects;