import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';
import { motion } from 'framer-motion';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar*/}
      <motion.div initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.4,
      ease: 'easeOut'
    }} className="relative bg-[#B62028] text-white py-2.5 px-4 text-sm shadow-sm overflow-hidden">
        {/* Animated Backgro */}
        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" animate={{
        x: ['-100%', '200%']
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear'
      }} />

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center md:justify-between gap-2 relative z-10">
          <div className="flex items-center gap-4 justify-center">
            <motion.span animate={{
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />  +263 242 796331 
            </motion.span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> 15 Baines Avenue, Harare
            </span>
          </div>
          <motion.div animate={{
          opacity: [0.8, 1, 0.8]
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="flex items-center gap-1.5 justify-center">
           <span className='flex items-center space-x-2'><Clock  /> <span>Open 24/7</span></span> 
          </motion.div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.4,
      delay: 0.1,
      ease: 'easeOut'
    }} className="bg-white/60 backdrop-blur-xl border border-white/20 border-b-2 border-b-[#B62028] sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-between items-center h-20">
            {/* Logo  */}
            <Link to="/" className="group">
              <img src="/logo.png" alt="Baines Intercare Medical Centre Logo" className="h-16 w-auto p-" />
            </Link>

            <nav className="hidden md:flex space-x-8">
              {[{
              name: 'Home',
              path: '/'
            }, {
              name: 'Facilities',
              path: '/facilities'
            }, {
              name: 'Contact',
              path: '/contact'
            }].map(item => <Link key={item.name} to={item.path} className="relative text-sm font-medium transition-colors duration-200 py-1 group">
                  <span className={`${isActive(item.path) ? 'text-[#B62028]' : 'text-[#444] group-hover:text-[#B62028]'}`}>
                    {item.name}
                  </span>
                  <motion.span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B62028]" initial={false} animate={{
                scaleX: isActive(item.path) ? 1 : 0,
                opacity: isActive(item.path) ? 1 : 0
              }} whileHover={{
                scaleX: 1,
                opacity: 1
              }} transition={{
                duration: 0.2,
                ease: 'easeOut'
              }} style={{
                originX: 0
              }} />
                  {isActive(item.path) && <motion.span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B62028]" animate={{
                opacity: [1, 0.5, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }} />}
                </Link>)}
            </nav>

          </div>
        </div>

        <div className="md:hidden border-t border-[#f0f0f0] bg-[#fafafa]">
          <nav className="flex justify-around p-3">
            {[{
            name: 'Home',
            path: '/'
          }, {
            name: 'Facilities',
            path: '/facilities'
          }, {
            name: 'Contact',
            path: '/contact'
          }].map(item => <Link key={item.name} to={item.path} className={`text-xs font-medium transition-colors relative ${isActive(item.path) ? 'text-[#B62028] font-bold' : 'text-[#666]'}`}>
                {item.name}
                {isActive(item.path) && <motion.span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#B62028]" layoutId="mobileActiveIndicator" transition={{
              duration: 0.3,
              ease: 'easeOut'
            }} />}
              </Link>)}
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t-4 border-[#B62028] relative overflow-hidden">
        {/* Background Accent */}
        <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B62028] to-transparent" animate={{
        x: ['-100%', '100%']
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear'
      }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-white">
                Baines Intercare
              </h3>
              <motion.div initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="w-12 h-1 bg-[#B62028] mb-4" />
              <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-xs">
                Committed to providing comprehensive healthcare services
                tailored to meet the needs of our community.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-2 text-white">
                Contact Us
              </h3>
              <motion.div initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="w-12 h-1 bg-[#B62028] mb-4" />
              <ul className="space-y-4 text-sm text-[#a0a0a0]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B62028] shrink-0" />
                  <span>15 Baines Avenue, Harare</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#B62028] shrink-0" />
                  <span> +263 242 796331</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-2 text-white">
                Quick Links
              </h3>
              <motion.div initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="w-12 h-1 bg-[#B62028] mb-4" />
              <ul className="space-y-3 text-sm text-[#a0a0a0]">
                <li>
                  <Link to="/facilities" className="hover:text-[#B62028] transition-colors">
                    Our Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#B62028] transition-colors">
                    Contact & Location
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-2 text-white">
                Follow Us
              </h3>
              <motion.div initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="w-12 h-1 bg-[#B62028] mb-4" />
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/bainesintercare" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#B62028] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://x.com/bainesintercare" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#B62028] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/bainesintercaremedicalcenter" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#B62028] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/baines-intercare" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#B62028] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] pt-8 text-center text-xs text-[#666]">
            <p>
              &copy; {new Date().getFullYear()} Baines Intercare Medical Centre.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
}