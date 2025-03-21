import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-8">Accessibility Statement</h1>
          <p className="text-gold-light mb-8">Last updated: March 20, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-gray-300">
              Mister Yaish Music is committed to making this website accessible to all users, 
              including those with disabilities.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">1. Web Accessibility Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>We follow WCAG 2.1 guidelines to improve accessibility.</li>
                <li>Our website supports keyboard navigation and screen readers.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">2. Need Assistance?</h2>
              <p className="text-gray-300">
                If you experience any accessibility issues, please email us at misteryaish_social@gmx.com, 
                and we will do our best to assist you.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gold-light/5 rounded-xl border border-gold-light/20">
              <div className="flex items-center gap-3 text-gold-light">
                <Mail className="w-5 h-5" />
                <p className="font-semibold">Contact Us</p>
              </div>
              <p className="mt-2 text-gray-300">
                For accessibility assistance, contact us at: misteryaish_social@gmx.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accessibility;