import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const products = [
  {
    id: 1,
    title: "Ayumanager Pro",
    category: "Enterprise Ayush ERP",
    tech: ["NCISM Compliant", "NABH Standard"],
    image: "/images/ayumanager.png", // Points to your public folder!
    link: "/products/explore",
    bgClass: "bg-[#050b14]"
  },
  {
    id: 2,
    title: "Naturecure Tech",
    category: "Luxury Wellness Management",
    tech: ["Therapy Scheduling", "Diet Management"],
    image: "/images/naturecure.png", // Points to your public folder!
    link: "/products/explore",
    bgClass: "bg-[#0a0a0a]"
  },
  // {
  //   id: 3,
  //   title: "NetSecure Gateway",
  //   category: "Cybersecurity",
  //   tech: ["DDoS Protection", "API Gateway"],
  //   image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", 
  //   link: "/products/netsecure-gateway",
  //   bgClass: "bg-[#050b14]"
  // }
];

const Products = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-4">
            // Digital Assets
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Proprietary <br className="hidden md:block" />
            <span className="text-slate-500 italic font-normal">Products.</span>
          </h2>
        </div>
      </div>

      {/* The 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Clickable Card Wrapper */}
            <Link 
              to={product.link}
              onClick={() => window.scrollTo(0, 0)}
              className={`group relative block w-full h-[280px] ${product.bgClass} rounded-2xl overflow-hidden shadow-lg border border-slate-800 transition-all duration-500`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0a0f1c]/70 group-hover:bg-[#0a0f1c]/50 transition-colors duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 
                              transition-all duration-300 ease-in-out
                              bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/80 to-transparent">
                
                <span className="text-[#ff5a36] text-xs font-bold tracking-wider uppercase mb-2 block">
                  {product.category}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {product.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((techItem, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 rounded-md border border-slate-700 bg-slate-800/50 text-slate-300 text-[10px] uppercase tracking-wider transition-colors group-hover:border-slate-500 group-hover:text-white"
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

      {/* The Updated Explore Button pointing to /products/explore */}
      <div className="mt-16 flex justify-center">
        <Link 
          to="/work/explore"
          onClick={() => window.scrollTo(0, 0)}
          className="group relative inline-flex items-center justify-center px-10 py-4 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 uppercase tracking-widest text-sm font-medium overflow-hidden transition-colors duration-500 hover:text-white hover:border-brandOrange z-10"
        >
          <span className="absolute w-[300px] h-[300px] bg-brandOrange rounded-full -left-[150%] top-[100%] transition-all duration-700 ease-out group-hover:-top-[50px] group-hover:-left-[50px] -z-10"></span>
          
          <span className="relative z-10">
            Explore
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Products;