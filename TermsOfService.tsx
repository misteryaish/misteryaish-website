import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-8">Terms of Service</h1>
          <p className="text-gold-light mb-8">Last updated: March 20, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-gray-300">
              By using Mister Yaish Music's website, you agree to the following terms:
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">1. General Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>The website is for informational and entertainment purposes only.</li>
                <li>All content (images, music, text) is owned by Mister Yaish Music and may not be copied or used without permission.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">2. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>We are not responsible for technical issues, downtime, or third-party links.</li>
                <li>Users agree to use the website at their own risk.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">3. Changes to Terms</h2>
              <p className="text-gray-300">
                We may update these terms from time to time. Continued use of the website means you accept any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">4. Contact</h2>
              <p className="text-gray-300">
                For any questions about these terms, contact us at misteryaish_social@gmx.com.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gold-light/5 rounded-xl border border-gold-light/20">
              <div className="flex items-center gap-3 text-gold-light">
                <Mail className="w-5 h-5" />
                <p className="font-semibold">Contact Us</p>
              </div>
              <p className="mt-2 text-gray-300">
                For questions about these terms, contact: misteryaish_social@gmx.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;