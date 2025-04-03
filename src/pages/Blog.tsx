
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Calendar, User, MessageSquare } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  comments: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Secret to Perfectly Fluffy Pishori Rice",
    excerpt: "Discover the traditional Kenyan method for cooking Pishori rice that results in perfectly separated, aromatic grains every time.",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1000",
    date: "April 1, 2025",
    author: "Chef Wanjiku",
    comments: 12
  },
  {
    id: 2,
    title: "Sustainable Farming Practices in Mwea Rice Fields",
    excerpt: "How modern sustainable farming techniques are being combined with traditional knowledge to preserve Mwea's fertile lands.",
    category: "Farming",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000",
    date: "March 28, 2025",
    author: "John Mwangi",
    comments: 8
  },
  {
    id: 3,
    title: "Health Benefits of Pure Pishori Rice",
    excerpt: "Nutritionists reveal why Pishori rice from Mwea is considered one of the healthiest varieties of rice available today.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1455853828816-0c301a011711?q=80&w=1000",
    date: "March 25, 2025",
    author: "Dr. Sarah Ouma",
    comments: 15
  },
  {
    id: 4,
    title: "Rice Pilau: A Kenyan Staple Made Perfect",
    excerpt: "Learn the authentic Kenyan Pilau recipe that transforms Shannix Pishori rice into a fragrant, spiced delicacy.",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa4e1dc?q=80&w=1000",
    date: "March 20, 2025",
    author: "Chef Wanjiku",
    comments: 23
  },
  {
    id: 5,
    title: "From Farm to Table: The Journey of Shannix Pishori",
    excerpt: "Follow the fascinating journey of how Pishori rice is cultivated, harvested, processed, and delivered to your kitchen.",
    category: "Farming",
    image: "https://images.unsplash.com/photo-1600147184950-b0a367a98bc3?q=80&w=1000",
    date: "March 15, 2025",
    author: "James Kimani",
    comments: 7
  },
  {
    id: 6,
    title: "Rice and Diabetes: Choosing the Right Variety",
    excerpt: "Why Pishori rice is increasingly recommended by nutritionists for people managing diabetes and blood sugar levels.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1603046891744-9b27e3f25149?q=80&w=1000",
    date: "March 10, 2025",
    author: "Dr. Sarah Ouma",
    comments: 19
  }
];

const Blog = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    // Filter by category
    if (filter !== "all" && post.category.toLowerCase() !== filter) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-pishori-darkGreen text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shannix Pishori Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            Insights, recipes, and stories about Kenya's finest Pishori rice from Mwea
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full md:w-2/3">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="recipes">Recipes</TabsTrigger>
                  <TabsTrigger value="farming">Farming</TabsTrigger>
                  <TabsTrigger value="health">Health</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-sm text-pishori-gold font-medium mb-1">{post.category}</div>
                      <CardTitle className="text-xl text-pishori-earth hover:text-pishori-gold transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground gap-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button variant="outline" className="text-pishori-gold border-pishori-gold hover:bg-pishori-gold hover:text-white transition-all">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
                  <Button 
                    variant="link" 
                    className="text-pishori-gold"
                    onClick={() => {
                      setFilter("all");
                      setSearchTerm("");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Pagination - Simple version */}
            <div className="mt-10 flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="bg-pishori-gold text-white border-pishori-gold">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            {/* Featured Image - Brand Banner */}
            <Card className="mb-6 overflow-hidden">
              <div className="relative">
                <img 
                  src="/lovable-uploads/4dfa767e-a940-4ac6-ad6a-890539775c14.png" 
                  alt="Shannix Pishori" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-pishori-darkGreen/40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <p className="text-sm font-medium">Premium Quality</p>
                    <h3 className="text-xl font-serif font-bold">PURE MWEA PISHORI</h3>
                    <p className="text-sm mt-2">Order Now</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Popular Categories */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-pishori-earth">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="mr-2">•</span> Recipes (12)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="mr-2">•</span> Farming (8)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="mr-2">•</span> Health (10)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="mr-2">•</span> Culture (5)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <span className="mr-2">•</span> Business (7)
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-pishori-earth">Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 hover:text-pishori-gold transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-pishori-lightGold/20 py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-pishori-earth mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-pishori-brown mb-6">
              Get the latest recipes, farming tips, and health insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Your email address" className="flex-grow" />
              <Button className="bg-pishori-gold hover:bg-pishori-darkGold text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
