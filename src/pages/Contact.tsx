
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-pishori-green/70 z-10" />
        <div 
          className="h-[300px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1565767954347-9df7509cd68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                We're here to answer your questions and help you experience the best of Mwea Pishori rice.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-pishori-earth mb-6">Get in Touch</h2>
              <p className="text-pishori-brown mb-8">
                Have a question about our products or interested in becoming a distributor? 
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pishori-brown mb-2">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="border-pishori-brown/20 focus:border-pishori-gold focus:ring-pishori-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pishori-brown mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-pishori-brown/20 focus:border-pishori-gold focus:ring-pishori-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-pishori-brown mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="+254 700 000 000" 
                    className="border-pishori-brown/20 focus:border-pishori-gold focus:ring-pishori-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-pishori-brown mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="border-pishori-brown/20 focus:border-pishori-gold focus:ring-pishori-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pishori-brown mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                    className="border-pishori-brown/20 focus:border-pishori-gold focus:ring-pishori-gold"
                  />
                </div>
                
                <div>
                  <Button type="submit" className="bg-pishori-gold hover:bg-pishori-darkGold text-white w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-pishori-cream rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-pishori-earth mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-pishori-gold h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-pishori-earth">Our Location</h4>
                      <p className="text-pishori-brown">Mwea, Kirinyaga County, Kenya</p>
                      <p className="text-pishori-brown">P.O. Box 123-10300</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-pishori-gold h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-pishori-earth">Phone</h4>
                      <p className="text-pishori-brown">+254 700 000 000</p>
                      <p className="text-pishori-brown">+254 720 000 000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-pishori-gold h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-pishori-earth">Email</h4>
                      <p className="text-pishori-brown">info@shannixpishori.com</p>
                      <p className="text-pishori-brown">sales@shannixpishori.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-pishori-gold h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-pishori-earth">Business Hours</h4>
                      <p className="text-pishori-brown">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-pishori-brown">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-pishori-brown">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-sm h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63857.84920420531!2d37.28369237775098!3d-0.6636187833371336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182641b622e2cdd9%3A0xedca246903d74211!2sMwea%2C%20Kenya!5e0!3m2!1sen!2sus!4v1624928300905!5m2!1sen!2sus"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Shannix Pishori Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-pishori-cream/50">
        <div className="container-custom">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Find answers to our most commonly asked questions. If you don't see what you're looking for, please contact us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-pishori-earth mb-3">Do you ship nationwide?</h3>
              <p className="text-pishori-brown">
                Yes, we deliver to all major towns and cities across Kenya. For remote areas, please contact our customer 
                service team to confirm availability and delivery times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-pishori-earth mb-3">What payment methods do you accept?</h3>
              <p className="text-pishori-brown">
                We accept M-Pesa, bank transfers, and all major credit and debit cards. For bulk orders, we can arrange 
                for personalized payment plans.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-pishori-earth mb-3">How do I become a distributor?</h3>
              <p className="text-pishori-brown">
                To become a distributor, please fill out the contact form on this page or email us at distributors@shannixpishori.com 
                with your business details. Our team will review your application and get back to you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-pishori-earth mb-3">What makes Shannix Pishori rice different?</h3>
              <p className="text-pishori-brown">
                Shannix Pishori is grown in the ideal conditions of Mwea, Kenya, with traditional farming methods that preserve 
                the authentic aroma and taste. Our rigorous quality control ensures only the best grains make it to your table.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
