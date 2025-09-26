import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export const ModernFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              
            >
              <div className="relative">
                <img
                  src="/logofinal.png"
                  alt="EarnBuddy"
                  className="w-12 h-12 object-contain"
                />
                <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-lg animate-pulse"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
                EarnBuddy
              </span>
            </motion.div>

            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Where ambitious builders come together to turn ideas into reality.
              Build. Collaborate. Earn.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://mailto:business@earnbuddy.tech?subject=Inquiry%20about%20EarnBuddy" 
                target='_blank'
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/earnbuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12  flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              
              <li><a href="#students" className="hover:text-emerald-400 transition-colors">For Students</a></li>
              <li><a href="#startups" className="hover:text-emerald-400 transition-colors">For Startups</a></li>
              <li><a href="#freelancers" className="hover:text-emerald-400 transition-colors">For Freelancers</a></li>
              <li><a href="#communities" className="hover:text-emerald-400 transition-colors">Communities</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 EarnBuddy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default ModernFooter;