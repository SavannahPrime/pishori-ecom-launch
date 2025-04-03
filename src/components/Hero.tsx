
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pishori-brown/80 to-pishori-darkGreen/80 z-10" />
      
      {/* Background Image (placeholder) */}
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Premium Authentic Mwea Pishori Rice
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Experience the rich heritage and exceptional quality of Kenya's finest rice, 
              cultivated in the pristine fields of Mwea.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-pishori-gold hover:bg-pishori-darkGold text-white btn-lg">
                Order Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 btn-lg">
                Become a Distributor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
