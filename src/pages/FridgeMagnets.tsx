import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
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

const FridgeMagnets = () => {
  const [products, setProducts] = useState<DisplayProduct[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", "Fridge Magnets")
        .order("created_at", { ascending: false });
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
        category: p.category ?? "Fridge Magnets",
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
      <section className="py-8 bg-gradient-to-br from-owl-warm to-owl-cream">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-owl-brown">
              Fridge Magnets Collection
            </h1>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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

          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No fridge magnets available at the moment.</p>
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

export default FridgeMagnets;
