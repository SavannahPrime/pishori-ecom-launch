
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Premium Pishori Rice - 1KG",
    price: 250,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Our signature 1KG pack, perfect for small families and first-time buyers.",
    logoOverlay: true
  },
  {
    id: 2,
    name: "Premium Pishori Rice - 5KG",
    price: 1100,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Value pack for regular use, ensuring you never run out of your favorite rice.",
    logoOverlay: true
  },
  {
    id: 3,
    name: "Premium Pishori Rice - 10KG",
    price: 2000,
    image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Family size pack ideal for households that appreciate quality rice daily.",
    logoOverlay: true
  },
  {
    id: 4,
    name: "Premium Pishori Rice - 25KG",
    price: 4500,
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Bulk savings for large families or small businesses looking for premium rice.",
    logoOverlay: true
  }
];

const ProductShowcase = () => {
  const navigate = useNavigate();
  
  const handleViewAllProducts = () => {
    navigate('/products');
  };
  
  return (
    <section className="py-20 bg-pishori-cream/30">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12">
          <img 
            src="/lovable-uploads/4dfa767e-a940-4ac6-ad6a-890539775c14.png" 
            alt="Shannix Logo" 
            className="w-24 h-24 object-contain mb-6"
          />
          <h2 className="section-heading text-4xl lg:text-5xl font-serif">Our Premium Products</h2>
          <div className="w-20 h-1 bg-pishori-gold my-4"></div>
          <p className="section-subheading text-lg max-w-2xl text-center">
            Discover our range of premium Pishori rice packages, carefully cultivated in the fertile fields of Mwea
            to deliver exceptional taste and quality for your family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            onClick={handleViewAllProducts} 
            className="bg-pishori-green hover:bg-pishori-darkGreen text-white btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
