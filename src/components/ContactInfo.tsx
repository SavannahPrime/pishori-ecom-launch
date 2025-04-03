
import { Mail, Phone, MapPin, Clock, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-pishori-earth p-6 text-white">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <p className="text-white/80">Reach out to us through any of these channels</p>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-pishori-gold mr-3 mt-1" />
          <div>
            <h3 className="font-medium text-pishori-earth">Phone</h3>
            <p className="text-pishori-brown">+254 110 343 334</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-5 w-5 text-pishori-gold mr-3 mt-1" />
          <div>
            <h3 className="font-medium text-pishori-earth">Email</h3>
            <p className="text-pishori-brown">info@shannixrice.co.ke</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-pishori-gold mr-3 mt-1" />
          <div>
            <h3 className="font-medium text-pishori-earth">Location</h3>
            <p className="text-pishori-brown">
              Shannix Rice Mill & Processing Plant<br />
              Mwea, Kirinyaga County, Kenya
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-pishori-gold mr-3 mt-1" />
          <div>
            <h3 className="font-medium text-pishori-earth">Working Hours</h3>
            <p className="text-pishori-brown">Monday to Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-pishori-brown">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MessageSquare className="h-5 w-5 text-pishori-gold mr-3 mt-1" />
          <div>
            <h3 className="font-medium text-pishori-earth">WhatsApp</h3>
            <p className="text-pishori-brown">+254 110 343 334</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-pishori-cream">
        <h3 className="font-medium text-pishori-earth mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-pishori-cream p-2 rounded-full text-pishori-earth hover:bg-pishori-gold hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="bg-pishori-cream p-2 rounded-full text-pishori-earth hover:bg-pishori-gold hover:text-white transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="bg-pishori-cream p-2 rounded-full text-pishori-earth hover:bg-pishori-gold hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
