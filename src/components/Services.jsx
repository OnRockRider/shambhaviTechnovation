// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, Smartphone, PenTool, Cloud } from 'lucide-react';

// const services = [
//   {
//     icon: <Code size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
//     title: "Custom Architecture",
//     description: "Enterprise-grade software solutions engineered for scale. We build robust backends and lightning-fast frontends tailored to your exact business logic."
//   },
//   {
//     icon: <Smartphone size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
//     title: "Mobile Platforms",
//     description: "Native and cross-platform mobile experiences that dominate app stores. We specialize in high-performance delivery for maximum market reach."
//   },
//   {
//     icon: <PenTool size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
//     title: "UI/UX Engineering",
//     description: "Pixel-perfect, conversion-optimized interfaces. We map user journeys and craft digital environments that feel intuitive, seamless, and premium."
//   },
//   {
//     icon: <Cloud size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
//     title: "Cloud Infrastructure",
//     description: "Secure, highly available server architectures. We deploy on AWS and Google Cloud with automated CI/CD pipelines for zero-downtime shipping."
//   }
// ];

// const Services = () => {
//   return (
//     <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
//       {/* Section Header */}
//       <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
//         <div>
//           <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-4">
//             // Core Capabilities
//           </span>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
//             Engineering precision <br className="hidden md:block" />
//             <span className="text-slate-500 italic font-normal">at every layer.</span>
//           </h2>
//         </div>
//         <p className="text-slate-600 dark:text-slate-400 font-light max-w-md leading-relaxed text-sm md:text-base">
//           We do not just write code; we build digital assets. From deep backend systems to front-facing user experiences, our protocol ensures flawless execution.
//         </p>
//       </div>

//       {/* Editorial 2x2 Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//             className="group bg-[#faf9f6] dark:bg-slate-950 p-10 md:p-16 relative overflow-hidden transition-colors duration-500 hover:bg-white dark:hover:bg-black"
//           >
//             {/* Subtle corner accent on hover */}
//             <div className="absolute top-0 right-0 w-16 h-16 bg-brandOrange/5 dark:bg-brandOrange/10 rounded-bl-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-top-right" />
            
//             <div className="mb-8 inline-block p-4 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-2xl relative z-10">
//               {service.icon}
//             </div>
            
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10" style={{ fontFamily: '"Playfair Display", serif' }}>
//               {service.title}
//             </h3>
            
//             <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed relative z-10">
//               {service.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default Services;


/**new learn more button added */

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Stethoscope, ShoppingCart, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    slug: "custom-software-development",
    icon: <Code size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
    title: "Custom Software Development",
    description: "We build scalable, high-performance applications tailored to your unique business workflows—leveraging modern frameworks (Angular, Node.js, React, Flutter) to accelerate time-to-market and drive efficiency."
  },
  {
    slug: "healthcare-it-solutions",
    icon: <Stethoscope size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
    title: "Healthcare IT Solutions",
    description: "Specialized software for hospitals, clinics and wellness centers: EMR/EHR systems, patient portals, telemedicine, IPD/OPD modules and compliance-ready workflows designed to improve care delivery and data security."
  },
  {
    slug: "e-commerce-development",
    icon: <ShoppingCart size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
    title: "E-Commerce Development",
    description: "End-to-end online store creation: Magento 2, custom JS-framework platforms, payment gateway integration, and feature-rich shopping experiences that boost conversions and streamline order management."
  },
  {
    slug: "ui-ux-design",
    icon: <PenTool size={32} className="text-brandOrange transition-transform duration-500 group-hover:scale-110" />,
    title: "UI/UX & Frontend Design",
    description: "User-centered interfaces that delight and convert. From wireframes and prototypes to pixel-perfect, responsive frontends—our designs ensure intuitive navigation and consistent branding across devices."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-4">
            // Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Engineering precision <br className="hidden md:block" />
            <span className="text-slate-500 italic font-normal">at every layer.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group bg-[#faf9f6] dark:bg-slate-950 p-10 md:p-16 relative overflow-hidden transition-colors duration-500 hover:bg-white dark:hover:bg-black flex flex-col h-full"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-brandOrange/5 dark:bg-brandOrange/10 rounded-bl-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-top-right" />
            
            <div className="mb-8 inline-block p-4 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-2xl relative z-10 w-fit">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10" style={{ fontFamily: '"Playfair Display", serif' }}>
              {service.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed relative z-10 flex-grow mb-8">
              {service.description}
            </p>

            {/* The Animated Outline Button */}
            <div className="mt-auto relative z-10">
              <Link 
                to={`/services/${service.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm tracking-widest uppercase transition-all duration-300 group-hover:bg-brandOrange group-hover:border-brandOrange group-hover:text-white"
              >
                Learn More
              </Link>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Services;