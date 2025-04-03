
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Premium Pishori Rice - 1KG",
    price: 250,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Our signature 1KG pack, perfect for small families and first-time buyers."
  },
  {
    id: 2,
    name: "Premium Pishori Rice - 5KG",
    price: 1100,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Value pack for regular use, ensuring you never run out of your favorite rice."
  },
  {
    id: 3,
    name: "Premium Pishori Rice - 10KG",
    price: 2000,
    image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Family size pack ideal for households that appreciate quality rice daily."
  },
  {
    id: 4,
    name: "Premium Pishori Rice - 25KG",
    price: 4500,
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Bulk savings for large families or small businesses looking for premium rice."
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-pishori-cream/50">
      <div className="container-custom">
        <h2 className="section-heading">Our Premium Products</h2>
        <p className="section-subheading">
          Discover our range of premium Pishori rice packages, carefully cultivated to deliver exceptional taste and quality.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-pishori-green hover:bg-pishori-darkGreen text-white btn-lg">
            <ShoppingCart className="mr-2 h-5 w-5" />
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
