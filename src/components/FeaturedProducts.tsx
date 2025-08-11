import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
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

const FeaturedProducts = () => {
  const [products, setProducts] = useState<DisplayProduct[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-owl-brown">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of authentic Indian crafts and home decor pieces
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* View All Button */}
        <div className="text-center">
          <Link to="/collections">
            <Button size="lg" variant="outline" className="border-owl-brown text-owl-brown hover:bg-owl-brown hover:text-primary-foreground group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
