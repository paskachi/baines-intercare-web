import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Beaker, Heart, Stethoscope, Pill, Sparkles, HeartPulse, PersonStanding, HandPlatter, Coffee } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
export function HomePage() {
  useScroll();
  return <div className="bg-white/80 backdrop-blur-lg">
      {/* Hero Section*/}
      <section className="relative py-20 sm:py-30 overflow-hidden">
        {/*  Background */}
          <img src="reception.jpg"  className="absolute inset-0 w-full h-full object-cover z-0"/>

        {/* GOverlay */}
        <div className="absolute inset-0 z-10 bg-white/5 backdrop-blur-[5px]"></div>

        {/*  Floating Particles */}
        <div className="absolute inset-0 z-10 opacity-20">
          {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute" initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * 600,
          opacity: 0.3
        }} animate={{
          y: [null, -100, 600],
          opacity: [0.3, 0.6, 0.3]
        }} transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          delay: i * 2,
          ease: 'linear'
        }}>
            <HeartPulse className="w-5 h-5 animate-pulse text-red-800" />
          </motion.div>)}
        </div>

        {/* Welcome Contentt */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.1,
          ease: 'easeOut'
        }} className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-lg p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Border  */}
            <motion.div className="absolute inset-0 rounded-lg" animate={{
            boxShadow: ['0 0 20px rgba(255, 255, 255, 0.1)', '0 0 40px rgba(255, 255, 255, 0.2)', '0 0 20px rgba(255, 255, 255, 0.1)']
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2,
            ease: 'easeOut'
          }} className="text-4xl sm:text-5xl font-serif font-bold text-[#B62028] mb-6 leading-tight relative">
              Welcome to Baines Intercare Medical Centre
            </motion.h1>

            {/* Underline */}
            <motion.div initial={{
            scaleX: 0
          }} animate={{
            scaleX: 1
          }} transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut'
          }} className="w-16 h-1 bg-[#B62028] mx-auto mb-8 relative">
              <motion.div className="absolute inset-0 bg-[#B62028]" animate={{
              opacity: [1, 0.5, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.5,
            ease: 'easeOut'
          }} className="text-lg sm:text-xl text-gray-800 leading-7 max-w-3xl mx-auto">
              At Baines Intercare Medical Centre, we are committed to providing
              comprehensive healthcare services tailored to meet the needs of
              our community. Our dedicated team of professionals ensures you
              receive the highest quality of care in a welcoming environment.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.7,
            ease: 'easeOut'
          }} className="mt-10">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-base font-bold rounded-sm text-[#B62028] bg-white hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm relative overflow-hidden group">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{
                  x: ['-100%', '200%']
                }} transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }} />
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <motion.span animate={{
                    x: [0, 5, 0]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }} className="ml-2">
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* AnCorents */}
        <motion.div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-lg" animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        <motion.div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-lg" animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1.5
      }} />
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="inline-block px-4 py-1 bg-[#B62028]/10 text-[#B62028] text-xs font-bold uppercase tracking-wider rounded-full mb-4 backdrop-blur-sm relative">
                <motion.div className="absolute inset-0 bg-[#B62028]/20 rounded-full" animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }} />
                <span className="relative z-10">About Our Facility</span>
              </motion.div>
              <h2 className="text-3xl font-serif font-bold text-[#010101] mb-4">
                Modern Healthcare{' '}
                <span className="text-[#B62028]">Facility</span>
              </h2>
              <motion.div initial={{
              scaleX: 0
            }} animate={{
              scaleX: 1
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="w-16 h-1 bg-[#B62028] mb-6" />
              <p className="text-[#555] leading-relaxed mb-6">
                Our state-of-the-art medical centre is equipped with the latest
                technology and staffed by experienced healthcare professionals
                dedicated to your well-being.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            ease: 'easeOut'
          }} className="relative group">
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }} className="aspect-[4/3] bg-[#e8e8e8] rounded-sm overflow-hidden border-2 border-[#B62028]/20 shadow-lg">
                <motion.img whileHover={{
                scale: 1.05
              }} transition={{
                duration: 0.4,
                ease: 'easeOut'
              }} src="/bi.jpg" alt="Medical Facility Interior" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }} className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B62028]/10 rounded-sm -z-10 backdrop-blur-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fafafa] relative overflow-hidden border-t-2 border-[#B62028]/20">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.5,
          ease: 'easeOut'
        }} className="text-center mb-12">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="inline-block px-4 py-1 bg-[#B62028]/10 text-[#B62028] text-xs font-bold uppercase tracking-wider rounded-full mb-4 backdrop-blur-sm border border-[#B62028]/20 relative">
              <motion.div className="absolute inset-0 bg-[#B62028]/20 rounded-full" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
              <span className="relative z-10 flex items-center">
                <motion.span animate={{
                rotate: 360
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }} className="mr-2">
                  <Sparkles className="w-3 h-3" />
                </motion.span>
                What We Offer
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#010101] mb-4">
              Our <span className="text-[#B62028]">Facilities</span>
            </h2>
            <div className="w-16 h-1 bg-[#B62028] mx-auto mb-4"></div>
            <p className="text-[#666] max-w-2xl mx-auto">
              Comprehensive care for you and your family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Pill className="w-6 h-6" />} title="Medicine Shoppe" description="On-site pharmacy offering a wide range of medications and health products with prompt service." delay={0} />
            <ServiceCard icon={<Beaker className="w-6 h-6" />} title="Pathology Laboratory" description="Equipped with the latest technology to provide accurate and timely diagnostic tests." delay={0.1} />
            <ServiceCard icon={<Activity className="w-6 h-6" />} title="Physiotherapy" description="Helping patients regain mobility and improve their quality of life with personalized plans." delay={0.2} />
            <ServiceCard icon={<Stethoscope className="w-6 h-6" />} title="GP Clinic" description="Primary healthcare services for individuals and families, diagnosing and treating various conditions." delay={0.3} />
            <ServiceCard icon={<Heart className="w-6 h-6" />} title="Wellness Clinic" description="Promoting holistic health through nutritional counselling, mental health support, and coaching." delay={0.4} />
            <ServiceCard icon={<PersonStanding className="w-6 h-6" />} title="Paediatric Department" description='At Baines Intercare, we prioritize children’s health through our Paediatric Department.' delay={0.5} />
            <ServiceCard icon={<HandPlatter className="w-6 h-6" />} title="VIP Lounge" description='Experience comfort and exclusivity in the VIP Lounge at Baines Intercare.' delay={0.5} />
            <ServiceCard icon={<Coffee className="w-6 h-6" />} title="Coffee Shop" description='Visit our in-house Coffee Shop for a delightful selection of beverages and snacks.' delay={0.5} />

            {/* action card  */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.5,
            delay: 0.5,
            ease: 'easeOut'
          }} className="bg-gradient-to-br from-[#B62028] to-[#961a21] p-8 rounded-sm text-white flex flex-col justify-center items-start h-full relative overflow-hidden group shadow-lg backdrop-blur-sm">
              <motion.div className="absolute inset-0 bg-black/10" animate={{
              opacity: [0.1, 0.2, 0.1]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
              <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
              <div className="relative z-10">
                <motion.h3 animate={{
                y: [0, -2, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }} className="font-serif text-xl font-bold mb-3">
                  Need medical advice?
                </motion.h3>
                <p className="text-white/90 mb-6 text-sm">
                  Our experienced practitioners are here to help you with your
                  health concerns.
                </p>
                <Link to="/contact" className="text-white border-b-2 border-white/50 pb-1 hover:border-white transition-colors text-sm font-bold inline-flex items-center group">
                  Contact Us
                  <motion.span animate={{
                  x: [0, 5, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} className="ml-2">
                    <ArrowRight className="w-3 h-3" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/facilities" className="inline-flex items-center text-[#B62028] font-bold hover:text-[#8a181e] transition-colors group border-b-2 border-[#B62028]/30 hover:border-[#B62028] pb-1">
              View all Facilities
              <motion.span className="inline-block ml-2" animate={{
              x: [0, 5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section with Red Accent */}
      <section className="py-20 bg-white/80 backdrop-blur-lg border-t-2 border-[#B62028]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            ease: 'easeOut'
          }} className="order-2 lg:order-1 relative group">
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }} className="aspect-[4/3] bg-[#e8e8e8] rounded-sm overflow-hidden border-2 border-[#B62028]/20 shadow-lg">
                <motion.img whileHover={{
                scale: 1.05
              }} transition={{
                duration: 0.4,
                ease: 'easeOut'
              }} src="/bi-patient.jpg" alt="Medical Team" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }} className="absolute -top-6 -left-6 w-32 h-32 bg-[#B62028]/10 rounded-sm -z-10 backdrop-blur-sm" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            ease: 'easeOut'
          }} className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 bg-[#B62028]/10 text-[#B62028] text-xs font-bold uppercase tracking-wider rounded-full mb-4 backdrop-blur-sm border border-[#B62028]/20">
                Our Commitment
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#010101] mb-4">
                Patient-Centered <span className="text-[#B62028]">Care</span>
              </h2>
              <div className="w-16 h-1 bg-[#B62028] mb-6"></div>
              <p className="text-[#555] leading-relaxed mb-6">
                We focus on preventive care and patient education to help you
                maintain your health and wellness. Your well-being is our
                priority, and our dedicated team is here to support you every
                step of the way.
              </p>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-[#B62028] text-white font-bold rounded-sm hover:bg-[#961a21] transition-colors shadow-md group backdrop-blur-sm relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" animate={{
                  x: ['-100%', '200%']
                }} transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }} />
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
}
function ServiceCard({
  icon,
  title,
  description,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.5,
    delay,
    ease: 'easeOut'
  }} whileHover={{
    y: -5
  }} className="backdrop-blur-md bg-white/80 p-8 border-2 border-[#e5e5e5] rounded-sm hover:border-[#B62028] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-[#B62028]/5 to-transparent opacity-0 group-hover:opacity-100" transition={{
      duration: 0.3
    }} />

      <motion.div whileHover={{
      rotate: [0, -10, 10, 0]
    }} transition={{
      duration: 0.5
    }} className="w-12 h-12 bg-[#B62028]/10 rounded-full flex items-center justify-center text-[#B62028] mb-6 group-hover:bg-[#B62028] group-hover:text-white transition-colors duration-300 backdrop-blur-sm relative z-10">
        <motion.div animate={{
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}>
          {icon}
        </motion.div>
      </motion.div>
      <h3 className="font-serif text-xl font-bold text-[#010101] mb-3 group-hover:text-[#B62028] transition-colors relative z-10">
        {title}
      </h3>
      <p className="text-[#666] text-sm leading-relaxed mb-4 relative z-10">
        {description}
      </p>
      <Link to="/facilities" className="text-[#B62028] text-sm font-bold hover:underline decoration-[#B62028] underline-offset-4 inline-flex items-center group relative z-10">
        Learn more
        <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </Link>
    </motion.div>;
}