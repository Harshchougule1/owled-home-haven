import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DisplayProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  description: string;
  inStock: boolean;
}

const Collections = () => {
  const [products, setProducts] = useState<DisplayProduct[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(8);
      if (error) {
        console.error("Failed to load products", error);
        return;
      }
      const mapped: DisplayProduct[] = (data as any[]).map((p) => ({
        id: p.id,
        name: p.name,
        price: Number(p.price),
        originalPrice: p.original_price ? Number(p.original_price) : undefined,
        image: p.image_url || "/placeholder.svg",
        rating: typeof p.rating === "number" ? p.rating : 0,
        reviews: typeof p.reviews === "number" ? p.reviews : 0,
        category: p.category ?? "General",
        isNew: !!p.is_new,
        isBestseller: !!p.is_bestseller,
        description: p.description ?? "",
        inStock: p.in_stock ?? true,
      }));
      setProducts(mapped);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-owl-warm to-owl-cream">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-owl-brown hover:text-owl-amber transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-owl-brown">
              All Collections
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete range of handcrafted Indian art and home decor pieces
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group cursor-pointer overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-owl-amber/50 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-owl-brown/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-owl-amber text-owl-brown px-3 py-1 rounded-full text-sm font-medium">
                      {category.productCount} items
                    </div>
                  </div>
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

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-owl-cream to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-owl-brown">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked items from across our collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
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
                description={product.description}
                inStock={product.inStock}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
