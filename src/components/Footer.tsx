
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pishori-darkGreen text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Shannix <span className="text-pishori-gold">Pishori</span>
            </h3>
            <p className="text-white/80 mb-4">
              Premium quality Pishori rice from the fertile fields of Mwea, Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pishori-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-pishori-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-pishori-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-pishori-lightGold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-pishori-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-pishori-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-pishori-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-pishori-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-pishori-lightGold">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-white/80 hover:text-pishori-gold transition-colors">
                  1KG Package
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-pishori-gold transition-colors">
                  5KG Package
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-pishori-gold transition-colors">
                  10KG Package
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-pishori-gold transition-colors">
                  25KG Package
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4 text-pishori-lightGold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pishori-gold mr-3 mt-0.5" />
                <span className="text-white/80">Mwea, Kirinyaga County, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pishori-gold mr-3" />
                <span className="text-white/80">+254 700 000 000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pishori-gold mr-3" />
                <span className="text-white/80">info@shannixpishori.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Shannix Pishori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
