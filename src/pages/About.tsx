
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-pishori-brown/70 z-10" />
        <div 
          className="h-[400px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1626469028023-68a1014c4fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Learn about the heritage and passion behind Shannix Pishori rice.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pishori-earth mb-6">The Journey of Shannix Pishori</h2>
              <p className="text-pishori-brown mb-4">
                Founded in 2010, Shannix Pishori has become synonymous with quality and authenticity in the rice industry. 
                Our journey began in the fertile fields of Mwea, where the perfect combination of rich soil, ideal climate, 
                and the waters of the Thiba River create the perfect conditions for growing Kenya's finest rice.
              </p>
              <p className="text-pishori-brown mb-4">
                Our founders, with deep roots in the agricultural traditions of Mwea, recognized the potential of bringing 
                authentic Pishori rice directly from the farm to tables across Kenya and beyond. With a commitment to quality 
                and sustainable farming practices, Shannix Pishori was born.
              </p>
              <p className="text-pishori-brown">
                Today, we continue to uphold the same values and commitment to excellence, ensuring that every grain of 
                Shannix Pishori rice delivers the authentic aroma, texture, and taste that our customers have come to love.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Rice fields in Mwea" 
                className="absolute w-[80%] h-[65%] top-0 right-0 object-cover rounded-lg shadow-lg z-10"
              />
              <img 
                src="https://images.unsplash.com/photo-1614168120183-e9b18080d2b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Rice grains" 
                className="absolute w-[65%] h-[50%] bottom-0 left-0 object-cover rounded-lg shadow-lg z-20"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Vision */}
      <section className="py-16 bg-pishori-cream/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-pishori-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-pishori-earth mb-4">Our Mission</h3>
              <p className="text-pishori-brown">
                To deliver the authentic taste of Mwea Pishori rice to homes across Kenya and beyond, 
                supporting local farmers and sustainable agricultural practices while maintaining the 
                highest standards of quality in every grain.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-pishori-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-pishori-earth mb-4">Our Vision</h3>
              <p className="text-pishori-brown">
                To be recognized globally as the premier provider of authentic Kenyan Pishori rice, 
                setting the standard for quality, sustainability, and agricultural excellence in the 
                industry, while contributing to the economic growth of the Mwea region.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading">Meet Our Team</h2>
          <p className="section-subheading">
            Dedicated professionals committed to bringing you the best of Mwea Pishori rice.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-pishori-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                alt="John Kamau - Founder & CEO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-pishori-earth mb-1">John Kamau</h3>
                <p className="text-pishori-gold mb-3">Founder & CEO</p>
                <p className="text-pishori-brown">
                  With over 25 years of experience in rice farming, John brings unparalleled expertise and passion to Shannix Pishori.
                </p>
              </div>
            </div>
            
            <div className="bg-pishori-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://randomuser.me/api/portraits/women/1.jpg" 
                alt="Mary Wanjiku - Operations Director" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-pishori-earth mb-1">Mary Wanjiku</h3>
                <p className="text-pishori-gold mb-3">Operations Director</p>
                <p className="text-pishori-brown">
                  Mary oversees our production process, ensuring every batch meets our exacting standards for quality and consistency.
                </p>
              </div>
            </div>
            
            <div className="bg-pishori-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://randomuser.me/api/portraits/men/2.jpg" 
                alt="Samuel Githiomi - Head of Agriculture" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-pishori-earth mb-1">Samuel Githiomi</h3>
                <p className="text-pishori-gold mb-3">Head of Agriculture</p>
                <p className="text-pishori-brown">
                  Samuel works closely with our network of farmers to implement sustainable farming practices and maximize yield quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-pishori-earth text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pishori-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Excellence</h3>
              <p className="text-white/80">
                We maintain the highest standards at every stage, from seed selection to final packaging.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pishori-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-white/80">
                We're committed to environmentally friendly farming practices that preserve Mwea's rich agricultural heritage.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pishori-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-white/80">
                We support local farmers and communities, fostering economic growth and agricultural expertise in Mwea.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-pishori-cream">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-pishori-earth mb-6">Ready to Experience Authentic Pishori Rice?</h2>
          <p className="text-pishori-brown mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made Shannix Pishori a permanent fixture in their kitchens.
          </p>
          <Button className="bg-pishori-gold hover:bg-pishori-darkGold text-white btn-lg">
            Shop Our Products
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
