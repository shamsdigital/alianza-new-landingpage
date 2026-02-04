import React from 'react';
import { Twitter, Github, Linkedin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onAudit: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAudit }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-mono tracking-tight mb-4 text-white">
              ALIANZA
            </h3>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Pioneering the future of digital entropy and heavy-compute optimization. 
              We build the infrastructure for the next generation of generative systems.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">PLATFORM</h4>
            <ul className="space-y-4">
              <li><a href="#mechanism" className="text-gray-400 hover:text-white transition-colors">Mechanism</a></li>
              <li><a href="#entropy" className="text-gray-400 hover:text-white transition-colors">Entropy Cloud</a></li>
              <li><a href="#calibration" className="text-gray-400 hover:text-white transition-colors">Calibration</a></li>
              <li><a href="#system" className="text-gray-400 hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">COMPANY</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li>
                <button 
                  onClick={onAudit}
                  className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alianza Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
