
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-pishori-lightGold sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="text-2xl font-serif font-bold text-pishori-earth">
              Shannix <span className="text-pishori-gold">Pishori</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-pishori-earth hover:text-pishori-gold transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium text-pishori-earth hover:text-pishori-gold transition-colors">
              Products
            </Link>
            <Link to="/about" className="font-medium text-pishori-earth hover:text-pishori-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-pishori-earth hover:text-pishori-gold transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-pishori-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-pishori-gold hover:bg-pishori-darkGold text-white">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="relative mr-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-pishori-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <button
              onClick={toggleMenu}
              className="text-pishori-earth focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-pishori-earth hover:text-pishori-gold px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="font-medium text-pishori-earth hover:text-pishori-gold px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-pishori-earth hover:text-pishori-gold px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-pishori-earth hover:text-pishori-gold px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-pishori-gold hover:bg-pishori-darkGold text-white mx-4">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
