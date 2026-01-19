import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFoundPage() {
  return (
    <div className="bg-white/80 backdrop-blur-lg min-h-[calc(100vh-200px)] flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center px-4 sm:px-6"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-9xl font-extrabold text-[#B62028] mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-serif font-bold text-[#010101] mb-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="text-[#444] text-lg mb-8 max-w-md mx-auto"
        >
          Sorry, the page you are looking for does not exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#B62028] text-base font-bold rounded-sm text-[#B62028] hover:bg-[#B62028] hover:text-white transition-all"
          >
            Go to Homepage
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
