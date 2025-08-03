import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-owl-warm to-owl-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-owl-brown">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of traditional Indian art and crafts
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-owl-amber/50 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Category Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-owl-brown/60 to-transparent"></div>
                  
                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4 bg-owl-amber text-owl-brown px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount} products
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-owl-brown group-hover:text-owl-amber transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  </div>

                  <Link to={`/${category.id}`}>
                    <Button className="w-full bg-owl-brown hover:bg-owl-brown/90 text-primary-foreground group/btn">
                      Browse Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;