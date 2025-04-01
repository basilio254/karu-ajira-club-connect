
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-ajira-blue">KARU AJIRA CLUB HUB</h1>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-ajira-darkBlue hover:text-ajira-blue">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-ajira-darkBlue hover:text-ajira-blue">
              About
            </Link>
            <Link to="/skills" className="px-3 py-2 rounded-md text-sm font-medium text-ajira-darkBlue hover:text-ajira-blue">
              Skills
            </Link>
            <Link to="/mentorship" className="px-3 py-2 rounded-md text-sm font-medium text-ajira-darkBlue hover:text-ajira-blue">
              Mentorship
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-4">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-ajira-blue hover:bg-ajira-lightBlue text-white">Register</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ajira-darkBlue hover:text-ajira-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-ajira-darkBlue hover:text-ajira-blue"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-ajira-darkBlue hover:text-ajira-blue"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-ajira-darkBlue hover:text-ajira-blue"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link 
              to="/mentorship" 
              className="block px-3 py-2 rounded-md text-base font-medium text-ajira-darkBlue hover:text-ajira-blue"
              onClick={() => setIsOpen(false)}
            >
              Mentorship
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-ajira-darkBlue hover:text-ajira-blue"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="block px-3 py-2 rounded-md text-base font-medium text-ajira-blue hover:text-ajira-lightBlue"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
