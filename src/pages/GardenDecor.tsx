import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GardenDecor = () => {
  const gardenDecorProducts = featuredProducts.filter(product => product.category === "Garden Decor");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-8 bg-gradient-to-br from-owl-warm to-owl-cream">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-owl-brown">
              Garden Decor Collection
            </h1>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gardenDecorProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                category={product.category}
                isNew={product.isNew}
                isBestseller={product.isBestseller}
              />
            ))}
          </div>

          {gardenDecorProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No garden decor items available at the moment.</p>
              <Link to="/">
                <Button className="mt-4 bg-owl-brown hover:bg-owl-brown/90">
                  Explore Other Categories
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GardenDecor;