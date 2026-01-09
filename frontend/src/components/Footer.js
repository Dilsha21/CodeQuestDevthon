import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Leaf,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <Leaf size={24} />
              </div>
              <span className="text-xl font-bold">MedFinder</span>
            </div>
            <p className="text-secondary-300 mb-4 max-w-md">
              Find medicines at nearby pharmacies with eco-friendly recommendations. 
              Making healthcare accessible while reducing environmental impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-secondary-300 hover:text-white transition-colors">
                  Search Medicine
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-secondary-300 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-secondary-300 hover:text-white transition-colors">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary-400" />
                <span className="text-secondary-300">support@medfinder.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary-400" />
                <span className="text-secondary-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-secondary-400" />
                <span className="text-secondary-300">123 Health St, Medical City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © 2024 MedFinder. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-secondary-400 text-sm mt-2 md:mt-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>for a healthier planet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
