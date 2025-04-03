
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  logoOverlay?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-zoom-in"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`}
        />
        
        {product.logoOverlay && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <img 
              src="/lovable-uploads/4dfa767e-a940-4ac6-ad6a-890539775c14.png" 
              alt="Shannix Logo" 
              className="w-32 h-32 object-contain mix-blend-multiply"
            />
          </div>
        )}

        <div className="absolute top-2 right-2 bg-pishori-gold text-white text-xs px-2 py-1 rounded-full font-medium">
          Premium
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-pishori-earth text-lg mb-2">{product.name}</h3>
        <p className="text-pishori-brown text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-pishori-gold font-bold text-xl">KSh {product.price.toLocaleString()}</span>
          <Button 
            size="sm" 
            className="bg-pishori-gold hover:bg-pishori-darkGold text-white transition-all duration-300"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
