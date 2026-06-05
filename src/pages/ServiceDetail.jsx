// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// // In a real app, this data might come from an API or a shared data file.
// // We store it here to populate the dynamic page based on the URL.
// const serviceData = {
//   "custom-software-development": {
//     title: "Custom Software Development",
//     subtitle: "Enterprise-grade architecture tailored to your workflows.",
//     content: "We engineer systems from the ground up. Whether migrating legacy databases or building modern single-page applications, our protocol ensures zero-downtime deployment and scalable infrastructure."
//   },
//   "healthcare-it-solutions": {
//     title: "Healthcare IT Solutions",
//     subtitle: "Secure, compliant, and patient-first digital systems.",
//     content: "Our healthcare systems are built with strict HIPAA compliance architectures. We focus on interoperability, ensuring your EMR/EHR systems communicate flawlessly with patient portals."
//   },
//   "e-commerce-development": {
//     title: "E-Commerce Development",
//     subtitle: "High-conversion storefronts and robust inventory routing.",
//     content: "We build scalable product architectures and secure payment gateways. Our e-commerce engines are designed to handle massive traffic spikes while maintaining sub-second load times."
//   },
//   "ui-ux-design": {
//     title: "UI/UX & Frontend Design",
//     subtitle: "Pixel-perfect interfaces optimized for human interaction.",
//     content: "Design is not just how it looks; it is how it works. We map complex user journeys and distill them into clean, accessible, and highly responsive frontend components."
//   }
// };

// const ServiceDetail = () => {
//   const { slug } = useParams();
//   const data = serviceData[slug];

//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] dark:bg-slate-950 text-slate-900 dark:text-white">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Service Protocol Not Found</h1>
//           <Link to="/services" className="text-brandOrange hover:underline">Return to Main Architecture</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 pt-32 px-6 md:px-12 transition-colors duration-500">
//       <div className="max-w-4xl mx-auto">
        
//         <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-brandOrange transition-colors mb-12">
//           <ArrowLeft size={16} />
//           <span className="text-sm font-medium tracking-widest uppercase">Back to Hub</span>
//         </Link>

//         <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-6">
//           // Service Specification
//         </span>
        
//         <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
//           {data.title}
//         </h1>
        
//         <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light mb-12">
//           {data.subtitle}
//         </p>

//         <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-12" />

//         <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 font-light leading-relaxed">
//           <p>{data.content}</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;

/**New service details with enhanced content */

import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';

const serviceData = {
  "custom-software-development": {
    title: "Custom Software Development",
    subtitle: "Enterprise-grade architecture tailored to your workflows.",
    content: "We engineer systems from the ground up. Whether migrating legacy databases or building modern single-page applications, our protocol ensures zero-downtime deployment and scalable infrastructure."
  },
  "healthcare-it-solutions": {
    title: "Healthcare IT Solutions",
    subtitle: "Secure, compliant, and patient-first digital systems.",
    content: "Our healthcare systems are built with strict HIPAA compliance architectures. We focus on interoperability, ensuring your EMR/EHR systems communicate flawlessly with patient portals."
  },
  "e-commerce-development": {
    title: "E-Commerce Development",
    subtitle: "High-conversion storefronts and robust inventory routing.",
    content: "We build scalable product architectures and secure payment gateways. Our e-commerce engines are designed to handle massive traffic spikes while maintaining sub-second load times."
  },
  "ui-ux-design": {
    title: "UI/UX & Frontend Design",
    subtitle: "Pixel-perfect interfaces optimized for human interaction.",
    content: "Design is not just how it looks; it is how it works. We map complex user journeys and distill them into clean, accessible, and highly responsive frontend components."
  }
};

const exploreData = {
  products: {
    tag: "// Core Technologies",
    title: "Proprietary Ecosystems",
    subtitle: "Enterprise-grade systems engineered for specialized medical sectors.",
    content: "Shambhavi Technovation does not just build for clients; we architect our own scalable, compliance-ready platforms that dominate niche healthcare operations.",
    items: [
      {
        title: "Ayumanager Pro",
        type: "Enterprise Ayush ERP",
        desc: "A powerful ERP solution engineered exclusively for Private Ayush Hospitals, Government facilities, and Ayush Colleges. Eliminates administrative bottlenecks while ensuring strict NCISM and NABH government compliance.",
        features: [
          "NABH & NCISM-compliant automated reporting",
          "Custom forms for Panchakarma & specialized departments",
          "End-to-end OPD/IPD patient case histories",
          "Automated pharmacy stock alerts & billing"
        ],
        url: "https://ayumanagerpro.com"
      },
      {
        title: "Naturecure Tech",
        type: "Luxury Wellness Management",
        desc: "Luxury centre management software designed for calm operations and scalable growth. Built specifically to handle the unique workflows of therapy-based wellness resorts, clinics, and hospitals.",
        features: [
          "Diet & Lifestyle record management",
          "Advanced Ward & Bed tracking algorithms",
          "Therapy scheduling and treatment plans",
          "Centralized multi-centre dashboard control"
        ],
        url: "https://naturecuretech.com"
      }
    ]
  },
  work: {
    tag: "// Active Ecosystems",
    title: "Continuous Engineering",
    subtitle: "Dedicated platform management and feature integration at scale.",
    content: "We don't just hand off code. We operate as dedicated technical partners for our clients, providing ongoing service, feature deployments, and architectural maintenance to ensure their platforms scale effortlessly.",
    items: [
      {
        title: "Beige AI",
        type: "Content Production Ecosystem",
        desc: "A modern operating system and marketplace for content production. Beige connects brands with elite videographers using a proprietary AI matchmaking algorithm and dynamic pricing engine, streamlining everything from pre-production to AI-assisted post-production.",
        features: [
          "Proprietary AI creative matchmaking",
          "Dynamic real-time pricing engine",
          "End-to-end production management dashboard",
          "AI-assisted rapid video editing workflows"
        ],
        url: "https://beige.app/"
      },
      {
        title: "Wikipoint Artisans",
        type: "AI Digital Presence Generator",
        desc: "An automated platform designed specifically for artisans to instantly build their digital presence. Using just voice or text input, the platform's AI generates a complete website, intelligent assistant, 3D space, and social media kits in under 90 seconds.",
        features: [
          "Voice-to-website AI generation",
          "Custom-trained smart customer assistant",
          "Automated social media content kits",
          "Integrated booking and contact modules"
        ],
        url: "https://wikipoint.ai/en/wikipoint-artisans/"
      }
    ]
  }
};

const ServiceDetail = ({ pageType = "service" }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Always scroll to top when first arriving at this new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, pageType]);

  let data;
  let isExploreHub = false;

  // 1. FIRST: Assign the correct data based on the page type!
  if (pageType === "products") {
    data = exploreData.products;
    isExploreHub = true;
  } else if (pageType === "work") {
    data = exploreData.work;
    isExploreHub = true;
  } else {
    data = serviceData[slug];
  }

  // 2. SECOND: Set up the smart back button routing
  let backPath = "/";
  if (pageType === "products") {
    backPath = "/products";
  } else if (pageType === "work") {
    backPath = "/work";
  } else {
    backPath = "/services";
  }

  // 3. FINALLY: Check if data exists
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Protocol Not Found</h1>
          <Link to={backPath} className="text-brandOrange hover:underline">Return to Hub</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 pt-25 lg:pt-24 pb-10 lg:pb-24 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* PREMIUM SCROLL RESTORATION BUTTON */}
        <Link 
          to={backPath} 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brandOrange transition-colors mb-8 lg:mb-6 bg-transparent border-none cursor-pointer p-0"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium tracking-widest uppercase">Back to Hub</span>
        </Link>

        <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-4 lg:mb-3">
          {data.tag || "// Service Specification"}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6 lg:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
          {data.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light mb-4 lg:mb-4">
          {data.subtitle}
        </p>

        <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-8 lg:mb-6" />

        <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-5 lg:mb-6">
          <p>{data.content}</p>
        </div>

        {isExploreHub && data.items && data.items.length > 0 && (
          <div className="flex flex-col gap-8 md:gap-12">
            {data.items.map((item, index) => (
              <div key={index} className="bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-10 lg:p-12 shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <span className="text-brandOrange text-xs font-bold tracking-wider uppercase mb-2 block">
                      {item.type}
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{item.title}</h2>
                  </div>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-brandOrange dark:bg-white dark:hover:bg-brandOrange text-white dark:text-slate-900 hover:text-white transition-colors duration-300 rounded-lg text-sm font-semibold tracking-wide w-full md:w-auto justify-center"
                  >
                    View Live Platform <ExternalLink size={16} />
                  </a>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="text-brandOrange shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ServiceDetail;