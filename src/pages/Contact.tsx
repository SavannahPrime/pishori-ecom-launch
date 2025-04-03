
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import MapLocation from '@/components/MapLocation';

const Contact = () => {
  return (
    <div className="min-h-screen bg-pishori-cream/20 py-16">
      <div className="container-custom">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/4dfa767e-a940-4ac6-ad6a-890539775c14.png" 
            alt="Shannix Logo" 
            className="w-28 h-28 object-contain mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-pishori-earth mb-4 font-serif">Get in Touch</h1>
          <div className="w-24 h-1 bg-pishori-gold mx-auto my-6"></div>
          <p className="text-pishori-brown max-w-3xl mx-auto text-lg">
            Have questions about our premium Pishori rice or interested in placing a bulk order? 
            We'd love to hear from you. Our dedicated team is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-pishori-earth mb-6 font-serif text-center">Find Us</h2>
          <MapLocation />
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img 
                src="/lovable-uploads/4dfa767e-a940-4ac6-ad6a-890539775c14.png" 
                alt="Shannix Logo" 
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-pishori-earth mb-4">For Wholesale & Distribution</h3>
              <p className="text-pishori-brown mb-4">
                Looking to become a distributor or place large wholesale orders? Contact our dedicated B2B team
                for special pricing and partnership opportunities.
              </p>
              <Button className="bg-pishori-green hover:bg-pishori-darkGreen text-white shadow-md">
                Contact B2B Team
              </Button>
            </div>
            <div className="md:w-1/2 md:border-l md:pl-6 border-pishori-cream">
              <h4 className="font-medium text-pishori-earth mb-2">B2B Contact Information</h4>
              <div className="space-y-3">
                <p className="flex items-center text-pishori-brown">
                  <Phone className="h-5 w-5 mr-2 text-pishori-gold" />
                  +254 110 343 334
                </p>
                <p className="flex items-center text-pishori-brown">
                  <Mail className="h-5 w-5 mr-2 text-pishori-gold" />
                  b2b@shannixrice.co.ke
                </p>
                <p className="flex items-center text-pishori-brown">
                  <MapPin className="h-5 w-5 mr-2 text-pishori-gold" />
                  Mwea, Kirinyaga County, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
