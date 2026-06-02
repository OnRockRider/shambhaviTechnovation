import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// In a real app, this data might come from an API or a shared data file.
// We store it here to populate the dynamic page based on the URL.
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

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Protocol Not Found</h1>
          <Link to="/services" className="text-brandOrange hover:underline">Return to Main Architecture</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 pt-32 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-brandOrange transition-colors mb-12">
          <ArrowLeft size={16} />
          <span className="text-sm font-medium tracking-widest uppercase">Back to Hub</span>
        </Link>

        <span className="text-brandOrange font-mono uppercase tracking-widest text-xs block mb-6">
          // Service Specification
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
          {data.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light mb-12">
          {data.subtitle}
        </p>

        <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-12" />

        <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 font-light leading-relaxed">
          <p>{data.content}</p>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;