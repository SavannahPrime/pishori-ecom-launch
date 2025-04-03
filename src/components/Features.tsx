
import { Star, Award, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-pishori-gold" />,
      title: "Premium Quality",
      description: "Our rice is carefully selected to ensure only the finest grains make it to your table."
    },
    {
      icon: <Star className="h-10 w-10 text-pishori-gold" />,
      title: "Authentic Mwea Pishori",
      description: "Grown in the fertile fields of Mwea, our rice boasts unmatched flavor and aroma."
    },
    {
      icon: <Leaf className="h-10 w-10 text-pishori-gold" />,
      title: "100% Natural",
      description: "We pride ourselves on sustainable farming practices free from harmful chemicals."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading">Why Choose Shannix Pishori</h2>
        <p className="section-subheading">
          From our farm to your table, we ensure excellence at every step of the journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-pishori-cream rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-pishori-earth mb-4">{feature.title}</h3>
              <p className="text-pishori-brown">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
