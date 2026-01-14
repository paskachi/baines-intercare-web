import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Pill, Beaker, Activity, Stethoscope, Heart } from 'lucide-react';
export function ServicesPage() {
  return <div className="bg-white/80 backdrop-blur-lg min-h-screen pb-20">
      {/*  Header  */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      ease: 'easeOut'
    }} className="relative py-24 overflow-hidden">
    
        <div className="absolute inset-0 z-0">
          <img src="/bi.jpg" alt="Medical Services Background" className="w-full h-full object-cover" />
        </div>

        {/*  Overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10"></div>

        {/* Pattern*/}
        <div className="absolute inset-0 z-10 opacity-5">
          <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        </div>

        {/* Content  */}
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
              Comprehensive Healthcare
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
              Our Services
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
          }} className="text-[#010101] max-w-2xl mx-auto text-gray-800 text-lg">
              Comprehensive medical care delivered by experienced professionals
              in a state-of-the-art facility.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services  */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16">
        {/* Medicine Shoppe  */}
        <ServiceSection icon={<Pill className="w-8 h-8" />} title="Medicine Shoppe (On-Site Pharmacy)" image="/medicine-shoppe.jpg" delay={0.1}>
          <p className="mb-4">
            Our on-site pharmacy offers a wide range of medications and health
            products. We strive to provide prompt service, ensuring that you
            have access to the medications you need.
          </p>
          <p>
            Our licensed pharmacists are available to answer your questions,
            discuss medication management, and help you with any health
            concerns.
          </p>
        </ServiceSection>

        {/* Pathology Laboratory Section */}
        <ServiceSection icon={<Beaker className="w-8 h-8" />} title="Pathology Laboratory" image="/pathology-lab.jpg" delay={0.2}>
          <p className="mb-4">
            The laboratory at Baines Intercare Medical Centre is equipped with
            the latest technology to provide accurate and timely diagnostic
            tests. Our skilled laboratory technicians carry out a variety of
            tests, from routine blood work to specialized screenings.
          </p>
          <p>
            We emphasize efficient service and confidentiality, ensuring that
            your results are ready quickly and securely.
          </p>
        </ServiceSection>

        {/* Physiotherapy Section */}
        <ServiceSection icon={<Activity className="w-8 h-8" />} title="Physiotherapy" image="/physio.jpg" delay={0.3}>
          <p className="mb-4">
            Our physiotherapy department is committed to helping patients regain
            mobility and improve their quality of life. With a team of
            experienced physiotherapists, we offer personalized treatment plans
            tailored to individual needs.
          </p>
          <p>
            Whether recovering from an injury, managing chronic pain, or
            improving your physical function, we are here to support your
            journey to wellness.
          </p>
        </ServiceSection>

        {/* GP Clinic Section */}
        <ServiceSection icon={<Stethoscope className="w-8 h-8" />} title="GP Clinic" image="/gp-clinic.jpg" delay={0.4}>
          <p className="mb-4">
            In our GP Clinic, we provide primary healthcare services for
            individuals and families. Our general practitioners are here to
            diagnose and treat a wide variety of health conditions, conduct
            routine check-ups, and provide ongoing care.
          </p>
          <p>
            We focus on preventive care and patient education to help you
            maintain your health and wellness.
          </p>
        </ServiceSection>

        {/* Wellness Clinic Section */}
        <ServiceSection icon={<Heart className="w-8 h-8" />} title="Wellness Clinic" image="/wellness-clinic.jpg" delay={0.5}>
          <p className="mb-4">
            The Wellness Clinic at Baines Intercare Medical Centre is dedicated
            to promoting holistic health and well-being. We offer various
            services, including nutritional counselling, mental health support,
            and lifestyle coaching.
          </p>
          <p>
            Our team works with you to create a personalized wellness plan to
            achieve your health goals.
          </p>
        </ServiceSection>

        {/* calltp action contact us */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.6,
        ease: 'easeOut'
      }} className="mt-20 bg-gradient-to-br from-[#B62028] to-[#961a21] p-12 rounded-sm text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Ready to schedule a visit?
            </h3>
            <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white/90 mb-8 max-w-lg mx-auto text-lg">
              Our team is ready to assist you with your healthcare needs. Book
              an appointment online or contact us for more information.
            </p>
            <div className="flex justify-center">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-bold rounded-sm text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
}
function ServiceSection({
  title,
  children,
  delay,
  image
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
  image: string;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.5,
    delay,
    ease: 'easeOut'
  }} className="mb-16 last:mb-0 pb-16 border-b-2 border-[#B62028]/10 last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Image  */}
        <motion.div whileHover={{
        scale: 1.03
      }} transition={{
        duration: 0.3
      }} className="lg:col-span-1">
          <div className="aspect-square bg-[#e8e8e8] rounded-sm overflow-hidden border-2 border-[#B62028]/20 shadow-md backdrop-blur-sm">
            <img src={image} alt={`${title} Department`} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#010101] mb-2">
            {title}
          </h3>
          <div className="w-12 h-1 bg-[#B62028] mb-6"></div>
          <div className="text-[#444] leading-relaxed text-base">
            {children}
          </div>
        </div>
      </div>
    </motion.div>;
}