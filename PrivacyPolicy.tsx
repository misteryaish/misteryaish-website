import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-8">Privacy Policy</h1>
          <p className="text-gold-light mb-8">Last updated: March 20, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-gray-300">
              This Privacy Policy describes how Mister Yaish Music ("we", "our", or "us") collects, uses, 
              and protects the personal information of our users ("you", "your").
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>We collect information such as name, email, and interactions with our website for improving user experience and providing services.</li>
                <li>We may use cookies and third-party analytics (such as Google Analytics) to track usage data.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>To provide and improve our website and services.</li>
                <li>To send updates about new music releases and promotions.</li>
                <li>We never sell or share your personal data with third parties.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">3. Your Rights</h2>
              <p className="text-gray-300">
                You can request to access or delete your data by contacting us at misteryaish_social@gmx.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">4. Security</h2>
              <p className="text-gray-300">
                We take security seriously and implement encryption and other protective measures to secure your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gold-light">5. Contact</h2>
              <p className="text-gray-300">
                If you have any questions, please email misteryaish_social@gmx.com.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gold-light/5 rounded-xl border border-gold-light/20">
              <div className="flex items-center gap-3 text-gold-light">
                <Mail className="w-5 h-5" />
                <p className="font-semibold">Contact Us</p>
              </div>
              <p className="mt-2 text-gray-300">
                For privacy-related inquiries, contact us at: misteryaish_social@gmx.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;