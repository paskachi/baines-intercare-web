import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface ServiceAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
export function ServiceAccordion({
  title,
  children,
  defaultOpen = false
}: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return <div className="border-b border-[#e5e5e5] last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-6 text-left group focus:outline-none" aria-expanded={isOpen}>
        <h3 className={`font-serif text-xl sm:text-2xl transition-colors duration-200 ${isOpen ? 'text-[#B62028]' : 'text-[#010101] group-hover:text-[#B62028]'}`}>
          {title}
        </h3>
        <motion.span animate={{
        rotate: isOpen ? 180 : 0
      }} transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }} className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-200 ${isOpen ? 'border-[#B62028] text-[#B62028] bg-[#B62028]/5' : 'border-[#d1d1d1] text-[#666] group-hover:border-[#B62028] group-hover:text-[#B62028]'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }} className="overflow-hidden">
            <motion.div initial={{
          y: -10
        }} animate={{
          y: 0
        }} exit={{
          y: -10
        }} transition={{
          duration: 0.3,
          ease: 'easeOut'
        }} className="text-[#444] leading-relaxed text-base max-w-3xl mb-6">
              {children}
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}