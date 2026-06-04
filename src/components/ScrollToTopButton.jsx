import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      /* 
        MOBILE CHANGES:
        - bottom-4 right-4 (closer to the corner on mobile)
        - md:bottom-8 md:right-8 (keeps original spacing on desktop)
        - p-2.5 (smaller padding on mobile)
        - md:p-4 (keeps original padding on desktop)
      */
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-30 p-2.5 md:p-4 rounded-full bg-[#005bb5] hover:bg-[#004a94] text-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 cursor-pointer' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* 
        MOBILE ICON CHANGE: 
        Removed the fixed size={24} and used Tailwind classes 
        to make the icon smaller (w-5 h-5) on mobile and larger (md:w-6 md:h-6) on desktop 
      */}
      <ChevronUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
    </button>
  );
};

export default ScrollToTopButton;