import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Youtube, Mail } from 'lucide-react';

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
                <Link to="/privacy-policy" className="text-gray-400 hover:text-gold-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-400 hover:text-gold-light transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-gold-light transition-colors">
                  Terms of Service
                </Link>
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

export default Footer;