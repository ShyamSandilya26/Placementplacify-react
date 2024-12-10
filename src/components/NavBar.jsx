import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'; // Adjust path
import { MenuIcon, XIcon } from 'lucide-react';

export default function Navbar({ isMenuOpen, toggleMenu }) {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              PlacementPortal
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/register">Register</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/about">About</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button variant="ghost" className="w-full text-left">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" className="w-full text-left">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="ghost" className="w-full text-left">
            <Link to="/register">Register</Link>
          </Button>
          <Button variant="ghost" className="w-full text-left">
            <Link to="/about">About</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
