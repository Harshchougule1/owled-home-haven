import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Menu, User, Heart } from "lucide-react";
import { useState } from "react";
import owlLogo from "@/assets/owl-logo.png";

const Header = () => {
  const [cartItems] = useState(3); // Mock cart count

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={owlLogo} alt="The Owled Store" className="h-12 w-12" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-owl-brown">The Owled Store</h1>
              <p className="text-xs text-muted-foreground">Handmade with Love</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search for home decor, art, crafts..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-owl-amber focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-owl-amber text-owl-brown">
                  {cartItems}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-between py-3 border-t border-border/50">
          <div className="flex items-center gap-8">
            <Button variant="ghost" className="font-medium">Home</Button>
            <Button variant="ghost" className="font-medium">Fridge Magnets</Button>
            <Button variant="ghost" className="font-medium">Phad Paintings</Button>
            <Button variant="ghost" className="font-medium">Painted Stones</Button>
            <Button variant="ghost" className="font-medium">Collections</Button>
            <Button variant="ghost" className="font-medium">About Us</Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-medium">Contact</Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Track Order
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Help & Support
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;