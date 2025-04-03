
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-zoom-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-pishori-earth text-lg mb-2">{product.name}</h3>
        <p className="text-pishori-brown text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-pishori-gold font-bold text-xl">KSh {product.price}</span>
          <Button size="sm" className="bg-pishori-gold hover:bg-pishori-darkGold text-white">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
