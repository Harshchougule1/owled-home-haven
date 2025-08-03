import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from "lucide-react";
import owlLogo from "@/assets/owl-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-owl-brown text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={owlLogo} alt="The Owled Store" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">The Owled Store</h3>
                <p className="text-sm text-primary-foreground/70">Handmade with Love</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing you authentic Indian handicrafts and traditional art pieces that celebrate our rich cultural heritage.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Artisans",
                "Shipping Info",
                "Return Policy",
                "Size Guide",
                "Care Instructions",
                "Track Order",
                "Contact Us"
              ].map((link) => (
                <li key={link}>
                  <Button variant="link" className="h-auto p-0 text-primary-foreground/70 hover:text-primary-foreground">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              {[
                "Fridge Magnets",
                "Phad Paintings",
                "Painted Stones",
                "Wall Art",
                "Home Decor",
                "Gift Sets",
                "New Arrivals",
                "Best Sellers"
              ].map((category) => (
                <li key={category}>
                  <Button variant="link" className="h-auto p-0 text-primary-foreground/70 hover:text-primary-foreground">
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-owl-amber" />
                <span className="text-sm text-primary-foreground/80">hello@theowledstore.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-owl-amber" />
                <span className="text-sm text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-owl-amber mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Jaipur, Rajasthan<br />India - 302001
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-medium">Newsletter</h5>
              <p className="text-sm text-primary-foreground/70">
                Subscribe for updates on new arrivals and exclusive offers.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button className="bg-owl-amber text-owl-brown hover:bg-owl-amber/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Features Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-owl-amber" />
            <div>
              <div className="text-sm font-medium">Free Shipping</div>
              <div className="text-xs text-primary-foreground/70">On orders above ₹999</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-owl-amber" />
            <div>
              <div className="text-sm font-medium">Secure Payment</div>
              <div className="text-xs text-primary-foreground/70">100% secure checkout</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-owl-amber" />
            <div>
              <div className="text-sm font-medium">Easy Returns</div>
              <div className="text-xs text-primary-foreground/70">7 days return policy</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-owl-amber" />
            <div>
              <div className="text-sm font-medium">Multiple Payment</div>
              <div className="text-xs text-primary-foreground/70">Cards, UPI, Wallets</div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} The Owled Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
            <Button variant="link" className="h-auto p-0 text-primary-foreground/70 hover:text-primary-foreground">
              Privacy Policy
            </Button>
            <Button variant="link" className="h-auto p-0 text-primary-foreground/70 hover:text-primary-foreground">
              Terms of Service
            </Button>
            <Button variant="link" className="h-auto p-0 text-primary-foreground/70 hover:text-primary-foreground">
              Refund Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;