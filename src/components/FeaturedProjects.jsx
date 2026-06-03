// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowUpRight } from "lucide-react";

// // const projects = [
// //   {
// //     title: "E-Commerce Architecture",
// //     category: "Custom Software",
// //     className: "md:col-span-2 md:row-span-2 h-[450px] md:h-[600px]",
// //     bg: "bg-slate-900",
// //   },
// //   {
// //     title: "MedTech Pulse App",
// //     category: "Mobile iOS & Android",
// //     className: "md:col-span-1 md:row-span-1 h-[300px] md:h-[284px]",
// //     bg: "bg-zinc-900",
// //   },
// //   {
// //     title: "Fintech Dashboard",
// //     category: "UI/UX Redesign",
// //     className: "md:col-span-1 md:row-span-1 h-[300px] md:h-[284px]",
// //     bg: "bg-neutral-900",
// //   },
// //   {
// //     title: "SaaS Analytics Engine",
// //     category: "Full-Stack Development",
// //     className: "md:col-span-3 md:row-span-1 h-[350px]",
// //     bg: "bg-slate-950 border border-slate-800",
// //   },
// // ];

// // const FeaturedProjects = () => {
// //   return (
// //     <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
// //       {/* Editorial Header Block */}
// //       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
// //         <div>
// //           <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-3">
// //             // Selected Work
// //           </span>
// //           <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
// //             Featured <br />
// //             <span className="text-slate-500">Projects</span>
// //           </h2>
// //         </div>
// //         <p className="text-slate-400 max-w-sm text-sm md:text-base font-light leading-relaxed">
// //           A granular look into the digital architectures and custom solutions we
// //           have engineered for global tech landscapes.
// //         </p>
// //       </div>

// //       {/* Asymmetrical Bento Grid Matrix */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
// //         {projects.map((project, idx) => (
// //           <motion.div
// //             key={idx}
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, amount: 0.1 }}
// //             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
// //             className={`group relative overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 ${project.className} ${project.bg}`}
// //           >
// //             {/* Minimalist Hover Border Overlay */}
// //             <div className="absolute inset-0 border border-transparent group-hover:border-brandOrange/30 transition-colors duration-500 pointer-events-none z-20" />

// //             {/* Project Context Meta */}
// //             <div className="flex justify-between items-start relative z-10">
// //               <div>
// //                 <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
// //                   {project.category}
// //                 </p>
// //                 <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brandOrange transition-colors duration-300">
// //                   {project.title}
// //                 </h3>
// //               </div>
// //               <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-brandOrange group-hover:text-white group-hover:border-brandOrange transition-all duration-300 transform group-hover:rotate-45">
// //                 <ArrowUpRight size={18} />
// //               </div>
// //             </div>

// //             {/* Fake Abstract Tech UI Visual Inside Card */}
// //             <div className="w-full h-2/3 mt-6 bg-black/40 rounded-lg border border-slate-800/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] opacity-60 group-hover:opacity-100 flex items-center justify-center">
// //               <span className="text-xs font-mono text-slate-700 uppercase group-hover:text-slate-500 transition-colors">
// //                 [ Interactive Case Mockup ]
// //               </span>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturedProjects;

// /**Newer change for Featured Projects Section with large canvas */

// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "E-Commerce Architecture",
//     category: "Custom Software",
//     img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     title: "MedTech Pulse App",
//     category: "Mobile iOS & Android",
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     title: "Fintech Dashboard",
//     category: "UI/UX Redesign",
//     img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     title: "SaaS Analytics Engine",
//     category: "Full-Stack Development",
//     img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
//   }
// ];

// const FeaturedProjects = () => {
//   return (
//     <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full transition-colors duration-500">
      
//       <div className="mb-16">
//         <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white leading-none tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
//           Selected Work
//         </h2>
//         <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg font-light">
//           A granular look into the digital architectures and custom solutions we have engineered for global tech landscapes.
//         </p>
//       </div>

//       {/* v0 Style Standard Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {projects.map((project, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
//             className="group cursor-pointer"
//           >
//             <div className="overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-900 h-[350px] md:h-[450px] relative">
//               <img 
//                 src={project.img} 
//                 alt={project.title}
//                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out"
//               />
//             </div>
            
//             <div className="mt-6">
//               <p className="text-xs font-medium text-brandOrange uppercase tracking-wider mb-2">
//                 {project.category}
//               </p>
//               <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brandOrange transition-colors duration-300" style={{ fontFamily: '"Playfair Display", serif' }}>
//                 {project.title}
//               </h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;

/**Wider canvas */

// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "HealthSync Platform",
//     category: "Healthcare IT",
//     tech: ["React", "Node.js", "PostgreSQL", "AWS"],
//     bgClass: "bg-[#050b14]" // Deep navy block like your screenshot
//   },
//   {
//     title: "Fintech Dashboard",
//     category: "Financial Systems",
//     tech: ["Angular", "Tailwind", "Python", "Docker"],
//     bgClass: "bg-[#0a0a0a]"
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
//   {projects.map((project) => (
//            <div 
//             key={project.id}
//             /* h-[350px] on mobile, md:h-[500px] on desktop */
//             className="group relative w-full h-[350px] md:h-[500px] bg-[#0a0f1c] rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500"
//           >
//             {/* Faint Grid Background (matches your screenshot) */}
//             <div 
//               className="absolute inset-0 opacity-20 pointer-events-none" 
//               style={{
//                 backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
//                 backgroundSize: '40px 40px'
//               }}
//             ></div>

// //             {/* Content Container
// //                 opacity-100 = Always visible on mobile
// //                 lg:opacity-0 = Hidden by default on large desktops
// //                 lg:group-hover:opacity-100 = Visible on hover on large desktops 
// //             */}
//          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 
//                              opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
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
//                 {project.techStack.map((tech, index) => (
//                   <span 
//                     key={index}
//                     className="px-3 md:px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs md:text-sm transition-colors hover:border-slate-500 hover:text-white cursor-default"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//     </section>
//   );



// };

// export default FeaturedProjects;




// // 3 last one code 
// import React from 'react';

// const PortfolioSection = () => {
//   // Data based on your screenshots
//   const projects = [
//     {
//       id: 1,
//       category: "FINANCIAL SYSTEMS",
//       title: "Fintech Dashboard",
//       techStack: ["Angular", "Tailwind", "Python", "Docker"],
//     },
//     {
//       id: 2,
//       category: "HEALTHCARE IT",
//       title: "HealthSync Platform",
//       techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
//     }
//   ];

//   return (
//     <section className="py-12 md:py-24 px-4 md:px-12 max-w-7xl mx-auto w-full">
    
//       <div className="flex flex-col gap-8 md:gap-12">
//         {projects.map((project) => (
//           <div 
//             key={project.id}
//             /* h-[350px] on mobile, md:h-[500px] on desktop */
//             className="group relative w-full h-[350px] md:h-[500px] bg-[#0a0f1c] rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500"
//           >
//             {/* Faint Grid Background (matches your screenshot) */}
//             <div 
//               className="absolute inset-0 opacity-20 pointer-events-none" 
//               style={{
//                 backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
//                 backgroundSize: '40px 40px'
//               }}
//             ></div>

//             {/* Content Container
//                 opacity-100 = Always visible on mobile
//                 lg:opacity-0 = Hidden by default on large desktops
//                 lg:group-hover:opacity-100 = Visible on hover on large desktops 
//             */}
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
//                 {project.techStack.map((tech, index) => (
//                   <span 
//                     key={index}
//                     className="px-3 md:px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs md:text-sm transition-colors hover:border-slate-500 hover:text-white cursor-default"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>


//     </section>
//   );
// };

// export default PortfolioSection;




// main cars
//  <div className="flex flex-col gap-12">
//         {projects.map((project, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             className={`relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer border border-slate-300 dark:border-slate-800 ${project.bgClass}`}
//           >
//             {/* The Blueprint Grid Pattern */}
//             <div 
//               className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40"
//               style={{
//                 backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
//                 backgroundSize: '40px 40px'
//               }}
//             />

//             {/* Hover Reveal Content (Slides up from bottom) */}
//             <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end bg-gradient-to-t from-[#050b14] to-transparent h-1/2">
//               <p className="text-brandOrange text-xs font-bold uppercase tracking-widest mb-2">
//                 {project.category}
//               </p>
//               <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
//                 {project.title}
//               </h3>
              
//               <div className="flex gap-3 flex-wrap">
//                 {project.tech.map(t => (
//                   <span key={t} className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 text-xs font-medium backdrop-blur-sm">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>




// final;
import React from "react";

const projects = [
  {
    id: 1, 
    title: "HealthSync Platform",
    category: "Healthcare IT",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    bgClass: "bg-[#050b14]",
    link: "" ,// Added a placeholder link for future routing,
    image: ""
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Financial Systems",
    tech: ["Angular", "Tailwind", "Python", "Docker"],
    bgClass: "bg-[#0a0a0a]",
    link: "" ,// Added a placeholder link for future routing,
    image: ""
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Financial Systems",
    tech: ["Angular", "Tailwind", "Python", "Docker"],
    bgClass: "bg-[#0a0a0a]",
    link: "" ,// Added a placeholder link for future routing,
    image: ""
  }
];  

const FeaturedProjects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white leading-none tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
          Selected Work
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {projects.map((project) => (
          /* CHANGED TO <a> TAG: 
             Added 'block' and 'cursor-pointer' to make the whole area clickable.
             Added 'hover:-translate-y-2' and 'hover:shadow-2xl' for visual feedback.
          */
          <a 
            key={project.id}
            href={project.link}
            onClick={(e) => {
              // Optional: Remove this preventDefault when you add real links
              if (project.link === "#") e.preventDefault(); 
            }}
            className={`group relative w-full h-[260px] md:h-[500px] ${project.bgClass} rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500`}
          >
            {/* className={`block cursor-pointer group relative w-full h-[350px] md:h-[500px] ${project.bgClass} rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brandOrange/5 hover:border-slate-700`} */}
            {/* Faint Grid Background */}
            {/* <div 
              className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            ></div> */}
{/* Photo Background with Dark Overlay */}
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl z-0">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay to keep text readable */}
              <div className="absolute inset-0 bg-[#0a0f1c]/60 group-hover:bg-[#0a0f1c]/40 transition-colors duration-500"></div>
            </div>
            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 
                            opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                            transition-all duration-300 ease-in-out
                            bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/90 to-transparent">
              
              <span className="text-[#ff5a36] text-xs md:text-sm font-bold tracking-wider uppercase mb-2 block">
                {project.category}
              </span>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                {project.title}
              </h2>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tech.map((techItem, index) => (
                  <span 
                    key={index}
                    className="px-3 md:px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs md:text-sm transition-colors hover:border-slate-500 hover:text-white"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      
    </section>
  );
};

export default FeaturedProjects;