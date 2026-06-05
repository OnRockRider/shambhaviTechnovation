import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";

export const teamMembers = [
  {
    id: 1,
    name: "Pratik Panchal",
    role: "Founder & Full Stack Developer",
    bio: "Founder of the company with expertise in Full Stack and Magento development.",
    image: "/images/pratik.jpg",
  },
  {
    id: 2,
    name: "Dhruvi Chauhan",
    role: "Full Stack Developer",
    bio: "Builds modern web applications and scalable backend systems.",
    image: "/team/Dhruvi.png",
  },
  {
    id: 3,
    name: "Ronak Gandhi",
    role: "MEAN Developer",
    bio: "Builds robust web applications using the MEAN stack.",
    image: "/team/Ronak.png",
  },
  {
    id: 4,
    name: "Devanshu Patel",
    role: "MEAN Developer",
    bio: "Focused on developing scalable and maintainable web applications.",
    image: "/team/Devanshu.png",
  },
  {
    id: 5,
    name: "Neha Panchal",
    role: "Backend Developer",
    bio: "Specializes in backend systems, APIs, and database management.",
    image: "/team/Neha.png",
  },
  {
    id: 6,
    name: "Vaidehi Khavadiya",
    role: "Online Brand Manager",
    bio: "Manages digital branding and online presence strategies.",
    image: "/team/Vaidehi.jpg",
  },
  {
    id: 7,
    name: "Jaimin Patel",
    role: "Junior MEAN Developer",
    bio: "Contributes to frontend and backend development projects.",
    image: "/team/Jaimin.png",
  },
  {
    id: 8,
    name: "Fenish Patel",
    role: "Junior MEAN Developer",
    bio: "Develops and maintains applications using the MEAN stack.",
    image: "/team/Fenish.png",
  },
  {
    id: 9,
    name: "Harsh Patel",
    role: "Flutter Developer",
    bio: "Builds cross-platform mobile applications with Flutter.",
    image: "/team/Harsh-Patel.png",
  },
  {
    id: 10,
    name: "Parth Panchal",
    role: "Full Stack Developer",
    bio: "Works across frontend and backend technologies to deliver complete solutions.",
    image: "/team/Parth.png",
  },
  {
    id: 11,
    name: "Harsh Panchal",
    role: "MERN Developer",
    bio: "Develops modern web applications using React and Node.js.",
    image: "/team/Harsh-Panchal.png",
  },
  {
    id: 12,
    name: "Jay Prajapati",
    role: "MERN Developer",
    bio: "Focused on creating responsive and scalable web applications.",
    image: "/team/Jay-Prajapati.png",
  },
  {
    id: 13,
    name: "Vivek Patel",
    role: "MERN Developer",
    bio: "Builds end-to-end solutions using the MERN ecosystem.",
    image: "/team/Vivek.jpg",
  },
  {
    id: 14,
    name: "Nitul Khambhalia",
    role: "MERN Developer",
    bio: "Passionate about developing performant web applications.",
    image: "/team/Nitul.png",
  },
  {
    id: 15,
    name: "Jayesh Prajapati",
    role: "MERN Developer",
    bio: "Focused on creating responsive and scalable web applications.",
    image: "/team/Jayesh-Prajapati.png",
  }
];

const Team = () => {
  // Always scroll to top when arriving at this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 pt-32 pb-24 px-6 md:px-12 transition-colors duration-500">
      
      {/* Container max-width aligned with your design system */}
      <div className="max-w-7xl mx-auto">
        
        {/* PREMIUM SCROLL RESTORATION BUTTON */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#ff5a36] transition-colors mb-12 bg-transparent border-none cursor-pointer p-0"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium tracking-widest uppercase">Back to Hub</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[#ff5a36] font-mono uppercase tracking-widest text-left text-xs md:text-sm block mb-4">
            // The Minds Behind The Magic
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight text-left"  style={{ fontFamily: '"Playfair Display", serif' }}>
            Meet our <span className="italic font-normal text-slate-500">Team.</span>
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed mx-auto md:mx-0">
            We are a collective of engineers, designers, and strategists dedicated to building production-ready architecture mapped to perfection.
          </p>
        </div>

        {/* TEAM CARDS GRID 
            CHANGED: lg:grid-cols-4 for 4 cards in one row on desktop 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container 
                  FIXED CROPPING: Replaced fixed heights with 'aspect-[4/3]'. 
                  This keeps the image shaped like a proper portrait photo.
              */}
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top   group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                {/* object-cover object-top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Container 
                  SHRUNK: Reduced padding to p-5 to fit narrower 4-col cards 
              */}
              <div className="p-4 md:p-5 relative bg-white z-10 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-[#ff5a36] text-[11px] md:text-xs font-semibold tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed mb-5 line-clamp-3 flex-1">
                  {member.bio}
                </p>

                {/* Social Icons
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#ff5a36] transition-colors duration-300">
                      <FaLinkedinIn size={15} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#ff5a36] transition-colors duration-300">
                      <FaGithub size={15} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#ff5a36] transition-colors duration-300">
                      <FaTwitter size={15} />
                    </a>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;
