
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
