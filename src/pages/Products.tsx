
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { ShoppingCart, Filter } from 'lucide-react';

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
  },
  {
    id: 5,
    name: "Shannix Aromatic Rice - 1KG",
    price: 280,
    image: "https://images.unsplash.com/photo-1536304575999-6a3ae676c964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Our special aromatic blend, perfect for special occasions and fine dining."
  },
  {
    id: 6,
    name: "Shannix Aromatic Rice - 5KG",
    price: 1300,
    image: "https://images.unsplash.com/photo-1580823673523-a9983312b571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Family pack of our premium aromatic rice blend for those who appreciate excellence."
  },
  {
    id: 7,
    name: "Shannix Brown Rice - 1KG",
    price: 300,
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Nutritious brown rice option for health-conscious consumers."
  },
  {
    id: 8,
    name: "Shannix Brown Rice - 5KG",
    price: 1400,
    image: "https://images.unsplash.com/photo-1593001943516-7f4e67794ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Economy pack of our whole grain brown rice for a healthier lifestyle."
  }
];

const Products = () => {
  const [cart, setCart] = useState<number[]>([]);
  
  return (
    <div className="py-12 bg-pishori-cream/30">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-pishori-earth mb-4">Our Products</h1>
          <p className="text-pishori-brown max-w-3xl mx-auto">
            Discover our range of premium Pishori rice products, cultivated in the fertile fields of Mwea and processed to maintain the authentic aroma and taste.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-pishori-earth">Filters</h3>
                <Filter className="h-5 w-5 text-pishori-gold" />
              </div>
              
              <div className="py-4 border-b border-pishori-cream">
                <h4 className="font-medium text-pishori-earth mb-3">Rice Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">Pishori Rice</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">Aromatic Rice</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">Brown Rice</span>
                  </label>
                </div>
              </div>
              
              <div className="py-4 border-b border-pishori-cream">
                <h4 className="font-medium text-pishori-earth mb-3">Package Size</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">1KG</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">5KG</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">10KG</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">25KG</span>
                  </label>
                </div>
              </div>
              
              <div className="py-4">
                <h4 className="font-medium text-pishori-earth mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">Below KSh 500</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">KSh 500 - KSh 2000</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold" />
                    <span className="text-pishori-brown">Above KSh 2000</span>
                  </label>
                </div>
              </div>
              
              <Button className="w-full bg-pishori-gold hover:bg-pishori-darkGold text-white mt-4">
                Apply Filters
              </Button>
            </div>
          </div>
          
          {/* Products */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-pishori-gold text-pishori-gold hover:bg-pishori-gold hover:text-white">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
