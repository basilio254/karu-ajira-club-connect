
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ajira-darkBlue text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KARU AJIRA CLUB HUB</h3>
            <p className="text-sm text-gray-300">
              Your gateway to digital skills, mentorship, and career growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/skills" className="text-gray-300 hover:text-white">Skills</Link></li>
              <li><Link to="/mentorship" className="text-gray-300 hover:text-white">Mentorship</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Youtube size={20} /></a>
            </div>
            <p className="text-sm text-gray-300">
              Email: info@karuajiraclub.com<br />
              Phone: +254 712 345 678
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KARU AJIRA CLUB HUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
