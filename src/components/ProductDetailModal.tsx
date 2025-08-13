import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
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
  };
}

const ProductDetailModal = ({ isOpen, onClose, product }: ProductDetailModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart, updateQuantity, items } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const cartItem = items.find(item => item.id === product.id);
  const isInCart = !!cartItem;

  // Generate multiple images for demo - in real app, these would come from product data
  const productImages = [
    product.image,
    product.image, // Would be different angles/views in real app
    product.image,
    product.image
  ];

  const handleAddToCart = async () => {
    setIsLoading(true);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-owl-warm to-owl-cream">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.isNew && <Badge className="bg-owl-amber text-owl-brown text-xs">New</Badge>}
                {product.isBestseller && <Badge variant="destructive" className="text-xs">Bestseller</Badge>}
                {discount > 0 && <Badge variant="secondary" className="text-xs">{discount}% OFF</Badge>}
              </div>

              {/* Wishlist button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                onClick={handleWishlistToggle}
              >
                <Heart
                  className={`h-4 w-4 ${
                    isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
                  }`}
                />
              </Button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index 
                      ? 'border-owl-amber' 
                      : 'border-border hover:border-owl-amber/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Category */}
            <div className="text-sm text-owl-amber font-medium uppercase tracking-wide">
              {product.category}
            </div>

            {/* Product Name */}
            <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-owl-amber text-owl-amber'
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-owl-brown">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm text-muted-foreground">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Add to Cart / Quantity Controls */}
            <div className="space-y-4">
              {isInCart ? (
                <div className="flex items-center justify-center gap-2 bg-owl-brown/10 rounded-lg p-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 border-owl-brown/20 hover:bg-owl-brown hover:text-white"
                    onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="text-xl font-bold text-owl-brown min-w-[2rem] text-center">
                    {cartItem.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 border-owl-brown/20 hover:bg-owl-brown hover:text-white"
                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  disabled={isLoading || !product.inStock}
                  className="w-full bg-owl-brown hover:bg-owl-brown/90 text-primary-foreground h-12 text-base"
                >
                  {isLoading ? (
                    "Adding..."
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;