// new version of footer with improved color scheme and layout
import "../css/Footer.css";
import React, { useEffect, useRef } from 'react';
import logoDesign from '/images/logo-design.png';
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        // This calculates the exact height of the footer in pixels
        const height = footerRef.current.offsetHeight;
        // This creates a global CSS variable we can use anywhere
        document.documentElement.style.setProperty('--footer-height', `${height}px`);
      }
    };

    // Calculate on initial load
    updateFooterHeight();
    
    // Recalculate if the user resizes their browser window or rotates their phone
    window.addEventListener('resize', updateFooterHeight);
    
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <img
            src={logoDesign}
            alt="Shambhavi Technovation"
            className="footer-brand-logo"
          />
          <p>
            Architecting the future of software
            development with precision and innovation.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 w-full mt-4">
          {/* LinkedIn */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-brandOrange hover:border-brandOrange hover:text-white transition-all duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* Instagram */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-brandOrange hover:border-brandOrange hover:text-white transition-all duration-300"
          >
            <FaInstagram size={18} />
          </a>

          {/* GitHub */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-brandOrange hover:border-brandOrange hover:text-white transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          </div>
        </div>

        {/* NEW WRAPPER: Explore aur Company ko ek row me rakhne ke liye */}
        <div className="footer-links-row">
          
          {/* Links */}
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="/services" className="link-underline">Services</a>
            {/* <a href="#" className="link-underline">Our Team</a>
             */}
             <a href="/team" className="link-underline">Our Team</a>
            <a href="#" className="link-underline">Projects</a>
            <a href="/contact" className="link-underline">Contact</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#" className="link-underline">About</a>
            <a href="#" className="link-underline">Careers</a>
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
          </div>

        </div>

        <div className="footer-column updates-col">
          <h4>Stay Updated</h4>
          <p className="updates-text">
            Stay updated with our latest innovations.
          </p>
          <div className="email-form">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 SHAMBHAVI TECHNOVATION.
      </div>
    </footer>
  );
}

export default Footer;
