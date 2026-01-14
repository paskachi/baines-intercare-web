import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return <div className="bg-white/80 backdrop-blur-lg min-h-screen pb-20">
      {/* Page header */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      ease: 'easeOut'
    }} className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src="/bi.jpg" alt="Baines Intercare Background" className="w-full h-full object-cover" />
        </div>

        {/* GOverlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10"></div>

        {/* POverlay */}
        <div className="absolute inset-0 z-10 opacity-5">
          <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.1,
          ease: 'easeOut'
        }} className="backdrop-blur-md bg-white/30 border border-white/30 rounded-lg p-10 shadow-2xl">
            <div className="inline-block px-4 py-1 bg-black/10 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6 backdrop-blur-sm border border-white/30">
              Get In Touch
            </div>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2,
            ease: 'easeOut'
          }} className="text-4xl sm:text-5xl font-serif font-bold text-[#B62028] mb-4">
              Contact Us
            </motion.h1>
            <motion.div initial={{
            scaleX: 0
          }} animate={{
            scaleX: 1
          }} transition={{
            duration: 0.5,
            delay: 0.3,
            ease: 'easeOut'
          }} className="w-16 h-1 bg-[#B62028] mx-auto mb-6"></motion.div>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4,
            ease: 'easeOut'
          }} className="text-gray-800 max-w-2xl mx-auto text-lg">
              We are here to answer your questions and provide the support you
              need.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3,
          ease: 'easeOut'
        }}>
            <div className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[#010101] mb-2">
                Get in Touch
              </h2>
              <div className="w-12 h-1 bg-[#B62028] mb-6"></div>
              <div className="space-y-6">
                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.4,
                ease: 'easeOut'
              }} whileHover={{
                x: 5
              }} className="flex items-start group p-4 backdrop-blur-md bg-[#B62028]/5 rounded-sm border-l-4 border-[#B62028] shadow-sm">
                  <div className="w-10 h-10 bg-[#B62028] rounded-full flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[#010101]">Location</h3>
                    <p className="text-[#666] mt-1">
                      15 Baines Avenue
                      <br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.5,
                ease: 'easeOut'
              }} whileHover={{
                x: 5
              }} className="flex items-start group p-4 backdrop-blur-md bg-[#B62028]/5 rounded-sm border-l-4 border-[#B62028] shadow-sm">
                  <div className="w-10 h-10 bg-[#B62028] rounded-full flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[#010101]">Phone</h3>
                    <p className="text-[#666] mt-1 font-medium">
                      +263 242 796331
                    </p>
                    <p className="text-[#666] mt-1 font-medium">
                      +263 242 796332
                    </p>
                    
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.6,
                ease: 'easeOut'
              }} whileHover={{
                x: 5
              }} className="flex items-start group p-4 backdrop-blur-md bg-[#B62028]/5 rounded-sm border-l-4 border-[#B62028] shadow-sm">
                  <div className="w-10 h-10 bg-[#B62028] rounded-full flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[#010101]">Email</h3>
                    <p className="text-[#666] mt-1">info@bainesintercare.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Google Map */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.7,
            ease: 'easeOut'
          }} whileHover={{
            scale: 1.02
          }} className="w-full aspect-[16/10] bg-[#e5e5e5] rounded-sm border-2 border-[#B62028]/20 shadow-lg overflow-hidden">
              <iframe src="https://maps.google.com/maps?q=15%20Baines%20Avenue%20Harare%20Zimbabwe&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>

            {/* picture ge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.8,
            ease: 'easeOut'
          }} whileHover={{
            scale: 1.02
          }} className="mt-6 w-full aspect-[16/9] bg-[#e8e8e8] rounded-sm overflow-hidden border-2 border-[#B62028]/20 shadow-md group relative">
              <img src="/bi-out-2.jpg" alt="Medical Facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="w-14 h-14 text-[#B62028] border-2 border-white rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm bg-white/20">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <p className="text-sm text-[#B62028] font-medium">Baines Intercare</p>
                  <p className="text-xs  mt-1">Official</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4,
          ease: 'easeOut'
        }}>
            <h2 className="font-serif text-2xl font-bold text-[#010101] mb-2">
              Send a Message
            </h2>
            <div className="w-12 h-1 bg-[#B62028] mb-6"></div>
            {submitted ? <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.3,
            ease: 'easeOut'
          }} className="backdrop-blur-md bg-[#B62028]/10 border-2 border-[#B62028] p-8 rounded-sm text-center shadow-lg">
                <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.1,
              type: 'spring'
            }} className="w-16 h-16 bg-[#B62028] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Send className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-[#B62028] mb-2 text-xl">
                  Message Sent
                </h3>
                <div className="w-12 h-1 bg-[#B62028] mx-auto mb-4"></div>
                <p className="text-[#666] text-sm">
                  Thank you for contacting us. We will get back to you as soon
                  as possible.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold underline text-[#B62028] hover:no-underline">
                  Send another message
                </button>
              </motion.div> : <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.5
            }}>
                  <label htmlFor="name" className="block text-sm font-bold text-[#333] mb-1">
                    Full Name
                  </label>
                  <input type="text" id="name" required className="w-full px-4 py-2.5 border-2 border-[#d1d1d1] rounded-sm focus:border-[#B62028] focus:ring-2 focus:ring-[#B62028]/20 outline-none transition-all duration-200 backdrop-blur-sm bg-white/95" />
                </motion.div>
                <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.6
            }}>
                  <label htmlFor="email" className="block text-sm font-bold text-[#333] mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" required className="w-full px-4 py-2.5 border-2 border-[#d1d1d1] rounded-sm focus:border-[#B62028] focus:ring-2 focus:ring-[#B62028]/20 outline-none transition-all duration-200 backdrop-blur-sm bg-white/95" />
                </motion.div>
                <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.7
            }}>
                  <label htmlFor="subject" className="block text-sm font-bold text-[#333] mb-1">
                    Subject
                  </label>
                  <select id="subject" className="w-full px-4 py-2.5 border-2 border-[#d1d1d1] rounded-sm focus:border-[#B62028] focus:ring-2 focus:ring-[#B62028]/20 outline-none transition-all duration-200 backdrop-blur-sm bg-white/95">
                    <option>General Inquiry</option>
                    <option>Billing Question</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </motion.div>
                <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.8
            }}>
                  <label htmlFor="message" className="block text-sm font-bold text-[#333] mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-2.5 border-2 border-[#d1d1d1] rounded-sm focus:border-[#B62028] focus:ring-2 focus:ring-[#B62028]/20 outline-none transition-all duration-200 resize-none backdrop-blur-sm bg-white/95"></textarea>
                </motion.div>
                <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} type="submit" className="px-8 py-3.5 bg-[#B62028] text-white font-bold rounded-sm hover:bg-[#961a21] transition-colors shadow-lg hover:shadow-xl backdrop-blur-sm">
                  Send Message
                </motion.button>
              </form>}
          </motion.div>
        </div>
      </div>
    </div>;
}