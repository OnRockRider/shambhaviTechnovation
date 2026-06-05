// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus } from 'lucide-react';

// const faqs = [
//   {
//     question: "What is your typical project timeline?",
//     answer: "Every architecture is unique. A standard MVP typically takes 8-12 weeks from discovery to deployment, while enterprise-scale applications are mapped out in dedicated sprint cycles."
//   },
//   {
//     question: "Do you provide post-launch infrastructure support?",
//     answer: "Yes. We don't just ship and abandon. We offer comprehensive SLA-based maintenance, server monitoring, and continuous UI/UX iteration to ensure your product scales seamlessly."
//   },
//   {
//     question: "What technology stacks do you specialize in?",
//     answer: "Our core stack relies on React, Node.js, and Python, deployed on AWS or Vercel architectures. For mobile, we build natively or use Flutter for high-performance cross-platform delivery."
//   },
//   {
//     question: "How does your agile development process work?",
//     answer: "We work in strict two-week sprints. You get complete transparency through a dedicated staging environment, daily standups (if required), and granular Jira/Linear task tracking."
//   }
// ];

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFaq = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
      
//       {/* Section Header */}
//       <div className="mb-16">
//         <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-3">
//           // Protocol Details
//         </span>
//         <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
//           System <br />
//           <span className="text-slate-500">Queries</span>
//         </h2>
//       </div>

//       {/* Accordion Container */}
//       <div className="border-t border-slate-800">
//         {faqs.map((faq, index) => {
//           const isActive = activeIndex === index;

//           return (
//             <div 
//               key={index} 
//               className="border-b border-slate-800 overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleFaq(index)}
//                 className="w-full flex justify-between items-center py-8 text-left group cursor-pointer focus:outline-none"
//               >
//                 <span className={`text-lg md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-brandOrange' : 'text-slate-300 group-hover:text-white'}`}>
//                   {faq.question}
//                 </span>
                
//                 {/* Rotating Plus Icon */}
//                 <motion.div
//                   animate={{ rotate: isActive ? 45 : 0 }}
//                   transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
//                   className={`shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-300 ${isActive ? 'border-brandOrange text-brandOrange' : 'border-slate-800 text-slate-500 group-hover:border-slate-500 group-hover:text-white'}`}
//                 >
//                   <Plus size={16} />
//                 </motion.div>
//               </button>

//               {/* Smooth Height Expansion */}
//               <AnimatePresence initial={false}>
//                 {isActive && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                   >
//                     <div className="pb-8 pr-12 text-slate-400 font-light leading-relaxed text-sm md:text-base">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         })}
//       </div>
      
//     </section>
//   );
// };

// export default Faq;

/**Color imporved section */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Every architecture is unique. A standard MVP typically takes 8-12 weeks from discovery to deployment, while enterprise-scale applications are mapped out in dedicated sprint cycles."
  },
  {
    question: "Do you provide post-launch infrastructure support?",
    answer: "Yes. We don't just ship and abandon. We offer comprehensive SLA-based maintenance, server monitoring, and continuous UI/UX iteration to ensure your product scales seamlessly."
  },
  {
    question: "What technology stacks do you specialize in?",
    answer: "Our core stack relies on React, Node.js, and Python, deployed on AWS or Vercel architectures. For mobile, we build natively or use Flutter for high-performance cross-platform delivery."
  },
  {
    question: "How does your agile development process work?",
    answer: "We work in strict two-week sprints. You get complete transparency through a dedicated staging environment, daily standups (if required), and granular Jira/Linear task tracking."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  {/* 1. OUTER SECTION: Stretches full width, paints the background pure white */}
  return (
    <section id="faq" className="w-full bg-white dark:bg-slate-950 py-24 transition-colors duration-500">
      
      {/* 2. INNER DIV: Keeps your content centered and adds the padding */}
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white font-black tracking-tighter uppercase leading-none ">
            Frequently Asked <br />
            <span className="text-slate-500">Questions</span>
          </h2>
        </div>

        <div className="border-t border-slate-300 dark:border-slate-800">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-slate-300 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-8 text-left group cursor-pointer focus:outline-none"
                >
                  {/* Fixed Text Contrast Here */}
                  <span className={`text-lg md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-brandOrange' : 'text-slate-900 dark:text-slate-300 group-hover:text-brandOrange dark:group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-300 ${isActive ? 'border-brandOrange text-brandOrange' : 'border-slate-300 dark:border-slate-800 text-slate-500 dark:text-slate-500 group-hover:border-slate-900 dark:group-hover:border-white'}`}
                  >
                    <Plus size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-8 pr-12 text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Faq;



