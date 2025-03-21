import React from 'react';
import { motion } from 'framer-motion';
import {
  Music,
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Music2,
} from 'lucide-react';

const platforms = [
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://instagram.com/misteryaish',
    color: 'from-[#833AB4] to-[#C13584]'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://facebook.com/misteryaish',
    color: 'from-[#1877F2] to-[#0A66C2]'
  },
  {
    name: 'TikTok',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    url: 'https://tiktok.com/@misteryaish',
    color: 'from-[#000000] to-[#333333]'
  },
  {
    name: 'X (Twitter)',
    icon: <Twitter className="w-6 h-6" />,
    url: 'https://twitter.com/misteryaish',
    color: 'from-[#000000] to-[#333333]'
  },
  {
    name: 'Spotify',
    icon: <Music className="w-6 h-6" />,
    url: 'https://open.spotify.com/artist/misteryaish',
    color: 'from-[#1DB954] to-[#169C46]'
  },
  {
    name: 'Apple Music',
    icon: <Music2 className="w-6 h-6" />,
    url: 'https://music.apple.com/artist/misteryaish',
    color: 'from-[#FA243C] to-[#D91E35]'
  },
  {
    name: 'Amazon Music',
    icon: <Music className="w-6 h-6" />,
    url: 'https://music.amazon.com/artists/misteryaish',
    color: 'from-[#00A8E1] to-[#0077C1]'
  },
  {
    name: 'SoundCloud',
    icon: <Music2 className="w-6 h-6" />,
    url: 'https://soundcloud.com/misteryaish',
    color: 'from-[#FF5500] to-[#FF3300]'
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-6 h-6" />,
    url: 'https://youtube.com/@misteryaish',
    color: 'from-[#FF0000] to-[#CC0000]'
  },
  {
    name: 'Threads',
    icon: <MessageCircle className="w-6 h-6" />,
    url: 'https://threads.net/@misteryaish',
    color: 'from-[#000000] to-[#333333]'
  }
];

const SocialLinks = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/8FoJjKO.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-[#BF953F] ring-offset-4 ring-offset-black">
              <img
                src="https://i.imgur.com/8FoJjKO.jpeg"
                alt="Mister Yaish"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">MISTER YAISH</h1>
            <p className="text-xl text-gray-400">Music Producer & Artist</p>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group flex items-center gap-4 p-4 rounded-xl
                  bg-gradient-to-r ${platform.color}
                  transform hover:scale-[1.02] transition-all duration-300
                  hover:shadow-[0_8px_16px_-4px_rgba(191,149,63,0.5)]
                `}
              >
                <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  {platform.icon}
                </div>
                <span className="font-semibold text-lg">{platform.name}</span>
                <span className="ml-auto transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;