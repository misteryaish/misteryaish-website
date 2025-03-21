import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Music, Mic2, Calendar, Image, Mail, Play, Youtube, Phone, MapPin, Send } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Tilt from 'react-parallax-tilt';
import clsx from 'clsx';
import SocialLinks from './components/SocialLinks';
import PrivacyPolicy from './components/PrivacyPolicy';
import Accessibility from './components/Accessibility';
import TermsOfService from './components/TermsOfService';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold tracking-wider gradient-text cursor-pointer"
          >
            MISTER YAISH MUSIC
          </motion.button>
          <div className="flex gap-8">
            {['ABOUT', 'MUSIC', 'VIDEOS', 'STORE', 'CONTACT'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:text-[#BF953F] transition-all duration-300 tracking-wide"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const parallaxProps = useSpring({
    from: { transform: 'translate3d(0,0,0)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translate3d(0,10px,0)' });
        await next({ transform: 'translate3d(0,-10px,0)' });
      }
    },
    config: { duration: 4000 },
    loop: true,
  });

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <animated.div 
          style={parallaxProps}
          className="w-full h-full"
        >
          <div 
            className="w-full h-full bg-[url('https://i.imgur.com/8FoJjKO.jpeg')] bg-cover bg-center"
            style={{
              filter: 'brightness(0.9) contrast(1.1)',
            }}
          />
        </animated.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent">
        <div className="h-full flex items-end pb-24">
          <div className="container mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="max-w-3xl space-y-2 ml-8"
            >
              {['DISCOVER', 'MISTER YAISH', 'EXCLUSIVE', 'UNIVERSE'].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <h2 className="text-7xl font-bold tracking-wider gradient-text text-left leading-tight">
                    {text}
                  </h2>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="ml-1 pt-6"
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
                  <button 
                    onClick={() => navigate('/links')}
                    className="luxury-button mt-4 px-12 py-4 text-black text-xl tracking-wider rounded-full shadow-xl"
                  >
                    Explore Now
                  </button>
                </Tilt>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[85%] max-w-[900px] h-[650px] mx-auto transform -translate-y-12"
          style={{
            background: `url('https://i.imgur.com/u80enEA.png') no-repeat center center`,
            backgroundSize: 'contain',
            opacity: 0.65,
            filter: 'contrast(1.2)',
            maskImage: 'radial-gradient(circle at center, black 60%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 85%)',
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-8 -mt-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-7xl font-bold gradient-text mb-10">ABOUT</h2>
          
          <h3 className="text-3xl font-bold text-gold-light mb-8">
            Mister Yaish – The New Voice Changing the Game!
          </h3>
          
          <div className="space-y-6 backdrop-blur-[2px] bg-black/10 p-8 rounded-2xl border border-gold-light/10">
            <p className="text-lg leading-relaxed">
              If you're looking for <span className="text-gold-light">music that moves you from the very first second</span>, 
              you've come to the right place. <span className="text-gold-light">Mister Yaish</span> brings a unique vibe, blending 
              <span className="text-gold-light"> reggae, pop, hip-hop, rap, reggaeton, dance</span>, and more, creating an unforgettable musical experience.
            </p>

            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 text-gold-light text-lg"
              >
                🔥 Beats that won't let you sit still
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 text-gold-light text-lg"
              >
                🎸 Party anthems, summer hits – pure energy tracks
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-2 text-gold-light text-lg"
              >
                🎵 Melodic tunes that will stick in your head
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-2 text-gold-light text-lg"
              >
                🌎 An exotic accent you've never heard anywhere else
              </motion.li>
            </ul>

            <p className="text-lg leading-relaxed">
              This isn't just another sound – it's fresh, groundbreaking, and electrifying, bringing something 
              completely different. While others sound the same, <span className="text-gold-light">Mister Yaish</span> is breaking 
              the rules, redefining the game with his unmistakable style and energy.
            </p>

            <div className="mt-6 space-y-2">
              <h4 className="text-xl font-bold text-gold-light">
                🚀 Are you ready to level up?
              </h4>
              <p className="text-lg">
                🎵 Listen now and let the music speak for itself!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MusicCard = ({ title, image, spotifyLink }: { title: string; image: string; spotifyLink: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card backdrop-blur-sm bg-black/30"
    >
      <div className="aspect-[16/8] relative overflow-hidden h-[220px] rounded-xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 p-6 space-y-2">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <a 
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-gold-light/30 text-gold-light hover:bg-gold-light/20 transition-all duration-300 flex items-center gap-2 group text-sm"
            >
              Listen Now
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StreamingButton = ({ platform, icon, bgColor }: { platform: string; icon: React.ReactNode; bgColor: string }) => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${bgColor} text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-3 hover:opacity-90 transition-opacity duration-300 shadow-lg w-[250px]`}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-semibold">Listen on {platform}</span>
    </motion.a>
  );
};

const MusicSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="music" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://i.imgur.com/u1lXv7d.jpeg')] bg-cover bg-center bg-fixed"
          style={{
            filter: 'brightness(0.5)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-8xl font-bold text-center mb-8 gradient-text"
        >
          MUSIC
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-[1200px] mx-auto">
          <MusicCard
            title="How U Doin"
            image="https://i.imgur.com/AI0aeyK.png"
            spotifyLink="https://open.spotify.com/track/5RtYzVPI47u37rcEdSa1cL"
          />
          <MusicCard
            title="Babe"
            image="https://i.imgur.com/cyC66J2.jpeg"
            spotifyLink="https://open.spotify.com/track/7DI6AFestmBv3NuUYFCZ3A"
          />
          <MusicCard
            title="I Don't Care"
            image="https://i.imgur.com/5YXHM3i.jpeg"
            spotifyLink="https://open.spotify.com/artist/3ueOvIhxk2ko8vFWTXsxuL"
          />
          <MusicCard
            title="Manhattan"
            image="https://i.imgur.com/17sZ9F6.jpeg"
            spotifyLink="https://open.spotify.com/artist/3ueOvIhxk2ko8vFWTXsxuL"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
          <StreamingButton
            platform="Spotify"
            icon={
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" 
                alt="Spotify" 
                className="w-full h-full object-contain" 
              />
            }
            bgColor="bg-[#1DB954]"
          />
          <StreamingButton
            platform="Apple Music"
            icon={
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png" 
                alt="Apple Music" 
                className="w-full h-full object-contain" 
              />
            }
            bgColor="bg-[#FA243C]"
          />
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ title, thumbnail, youtubeLink }: { 
  title: string; 
  thumbnail: string; 
  youtubeLink: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="video-card group"
    >
      <div className="aspect-video relative overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{title}</h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-[#BF953F] flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Watch ${title}`}
        />
      </div>
    </motion.div>
  );
};

const Videos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="videos" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2000')] bg-cover bg-center bg-fixed opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-8xl font-bold gradient-text mb-6">EXCLUSIVE VIDEOS</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the visual journey through our latest music videos and exclusive behind-the-scenes content
          </p>
        </motion.div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <VideoCard
            title="How U Doin - Official Music Video"
            thumbnail="https://img.youtube.com/vi/9mrdjHnnUgo/maxresdefault.jpg"
            youtubeLink="https://www.youtube.com/watch?v=9mrdjHnnUgo"
          />
          <VideoCard
            title="Babe - Official Music Video"
            thumbnail="https://img.youtube.com/vi/wT6z1FbvJPo/maxresdefault.jpg"
            youtubeLink="https://www.youtube.com/watch?v=wT6z1FbvJPo"
          />
          <VideoCard
            title="I Don't Care - Official Music Video"
            thumbnail="https://i.imgur.com/5YXHM3i.jpeg"
            youtubeLink="https://www.youtube.com/watch?v=your-video-id"
          />
          <VideoCard
            title="Manhattan - Official Music Video"
            thumbnail="https://i.imgur.com/17sZ9F6.jpeg"
            youtubeLink="https://www.youtube.com/watch?v=your-video-id"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://www.youtube.com/@MisterYaish"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#BF953F] to-[#AA771C] rounded-full hover:from-[#AA771C] hover:to-[#BF953F] transition-all duration-300 text-black font-semibold"
          >
            <Youtube className="transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Subscribe on YouTube
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="relative py-32 bg-black">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000')] bg-cover bg-center bg-fixed opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-8xl font-bold gradient-text mb-6">CONTACT</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch for bookings, collaborations, or just to say hello
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <form className="space-y-6 bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-gold-light/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gold-light/30 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-light transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-gold-light/30 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-light transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-black/50 border border-gold-light/30 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-light transition-colors"
                  placeholder="What's this about?"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <div className="relative">
                <textarea
                  rows={6}
                  className="w-full bg-black/50 border border-gold-light/30 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-light transition-colors"
                  placeholder="Your message here..."
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-black font-semibold py-4 rounded-lg hover:from-[#AA771C] hover:to-[#BF953F] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gold-light/20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-6">MISTER YAISH</h3>
            <p className="text-gray-400">
              Creating music that moves people and brings joy to the world.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold-light transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#music" className="text-gray-400 hover:text-gold-light transition-colors">
                  Music
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-gold-light transition-colors">
                  Videos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-gold-light transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/accessibility" className="text-gray-400 hover:text-gold-light transition-colors">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-gold-light transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold-light/10 flex items-center justify-center hover:bg-gold-light/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold-light/10 flex items-center justify-center hover:bg-gold-light/20 transition-colors"
              >
                <Music className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold-light/10 flex items-center justify-center hover:bg-gold-light/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gold-light/20 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mister Yaish Music. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/links" element={<SocialLinks />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-black text-white"
          >
            <Navbar />
            <Hero />
            <About />
            <MusicSection />
            <Videos />
            <Contact />
            <Footer />
          </motion.div>
        } />
      </Routes>
    </Router>
  );
}

export default App;