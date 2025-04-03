
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Kimani",
    role: "Home Chef",
    testimonial: "I've tried many rice brands, but Shannix Pishori is genuinely the most aromatic and flavorful. It's now a staple in my kitchen.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "David Mwangi",
    role: "Restaurant Owner",
    testimonial: "As a restaurant owner, quality is non-negotiable. Shannix Pishori rice has consistently impressed my customers with its perfect texture and taste.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Grace Otieno",
    role: "Food Blogger",
    testimonial: "The authentic aroma of Shannix Pishori rice takes any dish to the next level. I highly recommend it to anyone who appreciates quality ingredients.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="section-subheading">
          Join thousands of satisfied customers who have experienced the difference that Shannix Pishori brings to their table.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-pishori-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-pishori-gold text-pishori-gold" />
                ))}
              </div>
              
              <p className="text-pishori-brown italic mb-6">"{testimonial.testimonial}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-pishori-earth">{testimonial.name}</h4>
                  <p className="text-sm text-pishori-brown">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
