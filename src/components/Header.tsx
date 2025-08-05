import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, Search, Menu, User, Heart, LogOut, Package, UserIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import owlLogo from "@/assets/owl-logo.png";

const Header = () => {
  const { getTotalItems } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={owlLogo} alt="The Owled Store" className="h-12 w-12" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-owl-brown">The Owled Store</h1>
              <p className="text-xs text-muted-foreground">Handmade with Love</p>
            </div>
          </Link>

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
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{user.user_metadata?.full_name || user.email}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/orders')}>
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <UserIcon className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-owl-amber text-owl-brown">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-between py-3 border-t border-border/50">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Button variant="ghost" className="font-medium">Home</Button>
            </Link>
            <Link to="/fridge-magnets">
              <Button variant="ghost" className="font-medium">Fridge Magnets</Button>
            </Link>
            <Link to="/phad-paintings">
              <Button variant="ghost" className="font-medium">Phad Paintings</Button>
            </Link>
            <Link to="/painted-stones">
              <Button variant="ghost" className="font-medium">Painted Stones</Button>
            </Link>
            <Link to="/garden-decor">
              <Button variant="ghost" className="font-medium">Garden Decor</Button>
            </Link>
            <Link to="/collections">
              <Button variant="ghost" className="font-medium">Collections</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="font-medium">About Us</Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact">
              <Button variant="ghost" className="font-medium">Contact</Button>
            </Link>
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