import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-owl-cream to-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-owl-brown leading-tight">
              Discover the Beauty of
              <span className="text-owl-amber block">Indian Craftsmanship</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Bringing you authentic Rajasthani art, hand-painted treasures, and unique home decor pieces that tell stories of tradition and heritage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/collections">
              <Button size="lg" className="bg-owl-brown hover:bg-owl-brown/90 text-primary-foreground group">
                Shop Collections
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Beautiful Indian handmade crafts and home decor"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-owl-brown/20 to-transparent"></div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
            <div className="flex items-center gap-3">
              <div className="bg-owl-amber/20 p-2 rounded-lg">
                <Star className="h-6 w-6 text-owl-amber fill-current" />
              </div>
              <div>
                <div className="font-semibold text-owl-brown">Premium Quality</div>
                <div className="text-sm text-muted-foreground">Handpicked Artisan Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;