import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ServicesPage() {
  return (
    <div className="bg-white/80 backdrop-blur-lg min-h-screen pb-20">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative py-24 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bi.jpg"
            alt="Medical services background"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-5 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:40px_40px]" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-10 shadow-2xl"
          >
            <span className="inline-block px-4 py-1 bg-black/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
              Comprehensive Healthcare
            </span>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#B62028] mb-4">
              Our Facilities
            </h1>

            <div className="w-16 h-1 bg-[#B62028] mx-auto mb-6" />

            <p className="text-gray-800 max-w-2xl mx-auto text-lg">
              Discover the wide range of facilities offered at Baines Intercare Medical Centre, designed for your well-being.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <main className="max-w-6xl mx-auto px-4 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Medicine Shoppe (On-Site Pharmacy)",
            image: "/medicine-shoppe.jpg",
            delay: 0.1,
            description:
              "Our on-site pharmacy offers a wide range of medications and health products. Licensed pharmacists are available to provide guidance, medication management, and professional advice.",
          },
          {
            title: "Pathology Laboratory",
            image: "/pathology-lab.jpg",
            delay: 0.2,
            description:
              "Equipped with modern diagnostic technology, our pathology laboratory delivers accurate and timely test results while maintaining strict confidentiality.",
          },
          {
            title: "Physiotherapy",
            image: "/physio.jpg",
            delay: 0.3,
            description:
              "Our physiotherapy services focus on restoring mobility, managing pain, and improving physical function through personalised treatment plans.",
          },
          {
            title: "GP Clinic",
            image: "/gp-clinic.jpg",
            delay: 0.4,
            description:
              "Comprehensive primary healthcare services including diagnosis, treatment, routine check-ups, and preventive medical care for individuals and families.",
          },
          {
            title: "Wellness Clinic",
            image: "/wellness-clinic.jpg",
            delay: 0.5,
            description:
              "A holistic approach to health offering nutritional counselling, mental health support, and lifestyle coaching tailored to your goals.",
          },
          {
            title: "VIP Lounge",
            image: "/vip.jpeg",
            delay: 0.6,
            description:
              "Experience comfort and exclusivity in the VIP Lounge at Baines Intercare. With comfortable seating, private spaces, complimentary refreshments, Wi-Fi, and a dedicated concierge, it’s the perfect place to relax while we take care of your needs.",
          },
          {
            title: "Paediatric Department",
            image: "/paed.jpeg",
            delay: 0.7,
            description:
              "At Baines Intercare, we prioritize children’s health through our Paediatric Department, offering routine check-ups, vaccinations, care for common childhood illnesses, developmental assessments, and nutritional guidance. Our compassionate, family-centred approach ensures that every child receives care tailored to their unique needs.",
          },
          {
            title: "Coffee Shop",
            image: "/coffee-shop.jpeg",
            delay: 0.8,
            description:
              "Visit our in-house Coffee Shop for a delightful selection of beverages and snacks. Whether it’s a refreshing smoothie, a warm coffee, or a light bite, it’s the perfect spot to relax and recharge before or after your visit.",
          },
        ].map((service, index) => (
          <ServiceGridItem key={index} {...service} />
        ))}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="md:col-span-2 lg:col-span-3 mt-20 bg-gradient-to-br from-[#B62028] to-[#961a21] p-12 text-center text-white rounded-xl shadow-xl"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to schedule a visit?
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6" />
          <p className="text-white/90 mb-8 max-w-lg mx-auto text-lg">
            Book an appointment online or contact us for more information.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white font-bold rounded-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.section>
      </main>
    </div>
  );
}

/* ---------------------------------- */
/* Service Card Component             */
/* ---------------------------------- */

interface ServiceGridItemProps {
  title: string;
  description: string;
  delay: number;
  image: string;
}

function ServiceGridItem({ title, description, delay, image }: ServiceGridItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative aspect-video sm:aspect-square rounded-[2px] overflow-hidden shadow-lg border border-white/20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 transition duration-300 hover:bg-black/60" />

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-end h-full text-white">
        <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed text-white/90">{description}</p>
      </div>
    </motion.article>
  );
}
