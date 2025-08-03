import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
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
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
  isNew,
  isBestseller,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);
    addToCart({
      id,
      name,
      price,
      image,
      category,
    });
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group relative overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border-border/50 hover:border-owl-amber/50">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {isNew && <Badge className="bg-owl-amber text-owl-brown text-xs">New</Badge>}
        {isBestseller && <Badge variant="destructive" className="text-xs">Bestseller</Badge>}
        {discount > 0 && <Badge variant="secondary" className="text-xs">{discount}% OFF</Badge>}
      </div>

      {/* Wishlist button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background"
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <Heart
          className={`h-4 w-4 ${
            isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
          }`}
        />
      </Button>

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-owl-warm to-owl-cream">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs text-owl-amber font-medium uppercase tracking-wide">
          {category}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-owl-brown transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating)
                    ? 'fill-owl-amber text-owl-amber'
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-owl-brown">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full bg-owl-brown hover:bg-owl-brown/90 text-primary-foreground group/btn"
        >
          {isLoading ? (
            "Adding..."
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              Add to Cart
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;