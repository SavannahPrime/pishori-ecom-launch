
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { ShoppingCart, Filter, ArrowDown } from 'lucide-react';

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
  },
  {
    id: 5,
    name: "Shannix Aromatic Rice - 1KG",
    price: 280,
    image: "https://images.unsplash.com/photo-1536304575999-6a3ae676c964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Our special aromatic blend, perfect for special occasions and fine dining.",
    logoOverlay: true
  },
  {
    id: 6,
    name: "Shannix Aromatic Rice - 5KG",
    price: 1300,
    image: "https://images.unsplash.com/photo-1580823673523-a9983312b571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Family pack of our premium aromatic rice blend for those who appreciate excellence.",
    logoOverlay: true
  },
  {
    id: 7,
    name: "Shannix Brown Rice - 1KG",
    price: 300,
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Nutritious brown rice option for health-conscious consumers.",
    logoOverlay: true
  },
  {
    id: 8,
    name: "Shannix Brown Rice - 5KG",
    price: 1400,
    image: "https://images.unsplash.com/photo-1593001943516-7f4e67794ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Economy pack of our whole grain brown rice for a healthier lifestyle.",
    logoOverlay: true
  }
];

const Products = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  return (
    <div className="py-16 bg-pishori-cream/20">
      <div className="container-custom">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/4dfa767e-a940-4ac6-ad6a-890539775c14.png" 
            alt="Shannix Logo" 
            className="w-28 h-28 object-contain mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-pishori-earth mb-4 font-serif">Premium Rice Collection</h1>
          <div className="w-24 h-1 bg-pishori-gold mx-auto my-6"></div>
          <p className="text-pishori-brown max-w-3xl mx-auto text-lg">
            Discover our range of premium Pishori rice products, cultivated in the fertile fields of Mwea and 
            processed to maintain the authentic aroma and taste that Kenyan families have loved for generations.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm inline-flex items-center">
              <span className="text-pishori-brown mr-2">Call us for bulk orders:</span>
              <a href="tel:+254110343334" className="text-pishori-gold font-bold">+254 110 343 334</a>
            </div>
          </div>
        </div>
        
        <div className="md:hidden mb-6">
          <Button 
            onClick={() => setFiltersVisible(!filtersVisible)} 
            variant="outline" 
            className="w-full flex items-center justify-between border-pishori-gold text-pishori-earth"
          >
            <span className="flex items-center">
              <Filter className="h-4 w-4 mr-2 text-pishori-gold" />
              Product Filters
            </span>
            <ArrowDown className={`h-4 w-4 transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className={`w-full md:w-1/4 ${filtersVisible ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-pishori-earth text-xl">Filters</h3>
                <Filter className="h-5 w-5 text-pishori-gold" />
              </div>
              
              <div className="py-4 border-b border-pishori-cream">
                <h4 className="font-medium text-pishori-earth mb-3">Rice Type</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">Pishori Rice</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">Aromatic Rice</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">Brown Rice</span>
                  </label>
                </div>
              </div>
              
              <div className="py-4 border-b border-pishori-cream">
                <h4 className="font-medium text-pishori-earth mb-3">Package Size</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">1KG</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">5KG</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">10KG</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">25KG</span>
                  </label>
                </div>
              </div>
              
              <div className="py-4">
                <h4 className="font-medium text-pishori-earth mb-3">Price Range</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">Below KSh 500</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">KSh 500 - KSh 2000</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-pishori-gold text-pishori-gold focus:ring-pishori-gold h-4 w-4" />
                    <span className="text-pishori-brown">Above KSh 2000</span>
                  </label>
                </div>
              </div>
              
              <Button className="w-full bg-pishori-gold hover:bg-pishori-darkGold text-white mt-6 shadow-md">
                Apply Filters
              </Button>
              
              <div className="mt-8 p-4 bg-pishori-cream/50 rounded-lg">
                <h4 className="font-medium text-pishori-earth mb-2">Need Help?</h4>
                <p className="text-sm text-pishori-brown mb-3">Contact our support team for assistance with your order</p>
                <a href="tel:+254110343334" className="text-pishori-gold font-bold flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +254 110 343 334
                </a>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <Button variant="outline" className="border-pishori-gold text-pishori-gold hover:bg-pishori-gold hover:text-white px-8 py-6 h-auto font-medium">
                Load More Products
              </Button>
            </div>
            
            <div className="mt-20 bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img 
                    src="/lovable-uploads/4dfa767e-a940-4ac6-ad6a-890539775c14.png" 
                    alt="Shannix Logo" 
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <h3 className="text-2xl font-bold text-pishori-earth mb-4">Bulk Orders & Wholesale</h3>
                  <p className="text-pishori-brown mb-4">
                    Are you a retailer, restaurant owner, or planning a large event? We offer special pricing for bulk orders.
                    Contact our sales team to discuss your requirements.
                  </p>
                  <Button className="bg-pishori-green hover:bg-pishori-darkGreen text-white shadow-md">
                    Request Wholesale Pricing
                  </Button>
                </div>
                <div className="md:w-1/2 md:border-l md:pl-6 border-pishori-cream">
                  <h4 className="font-medium text-pishori-earth mb-2">Contact Information</h4>
                  <div className="space-y-3">
                    <p className="flex items-center text-pishori-brown">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +254 110 343 334
                    </p>
                    <p className="flex items-center text-pishori-brown">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@shannixrice.co.ke
                    </p>
                    <p className="flex items-center text-pishori-brown">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pishori-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Mwea, Kirinyaga County, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
