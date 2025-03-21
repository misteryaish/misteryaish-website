import React from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4"
          >
            MISTER YAISH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-400"
          >
            Music Producer & Artist
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#D4AF37]">About</h2>
          <p className="text-lg text-gray-300">
            Mister Yaish is a music producer and artist known for creating unique soundscapes 
            that blend multiple genres into a distinctive style.
          </p>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="min-h-screen bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#D4AF37] flex items-center">
            <Music className="mr-2" /> Latest Releases
          </h2>
          {/* Add music content here */}
        </div>
      </section>

      {/* Add more sections as needed */}
    </main>
  );
};

export default MainContent;