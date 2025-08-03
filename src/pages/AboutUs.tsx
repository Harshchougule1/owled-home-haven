import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Award, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Every piece is carefully crafted by skilled artisans using traditional techniques passed down through generations.",
    },
    {
      icon: Users,
      title: "Supporting Artisans",
      description: "We work directly with local craftspeople, ensuring fair wages and preserving traditional Indian art forms.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Each product undergoes rigorous quality checks to ensure you receive only the finest handmade pieces.",
    },
    {
      icon: Palette,
      title: "Authentic Designs",
      description: "Our collection features genuine Rajasthani motifs and traditional patterns true to their cultural heritage.",
    },
  ];

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
              About The Owled Store
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preserving India's rich artistic heritage through authentic handcrafted treasures
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-owl-brown">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Owled Store was born from a passion for Indian handicrafts and a desire to bring authentic, traditional art pieces to modern homes. We believe that every handmade item carries within it the soul of its creator and the stories of ancient traditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the vibrant Phad paintings of Rajasthan that narrate epic tales, to the intricate mandala patterns on painted stones, each piece in our collection is a testament to India's incredible artistic diversity. Our mission is to preserve these traditional crafts while making them accessible to art lovers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-owl-cream to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-owl-brown">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-card border-border/50 hover:border-owl-amber/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="mx-auto w-12 h-12 bg-owl-amber/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-owl-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-owl-brown mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-owl-brown">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To bridge the gap between traditional Indian craftsmanship and contemporary lifestyle by providing authentic, high-quality handmade products that celebrate our rich cultural heritage while supporting local artisan communities.
            </p>
            <div className="pt-6">
              <Link to="/collections">
                <Button size="lg" className="bg-owl-brown hover:bg-owl-brown/90 text-primary-foreground">
                  Explore Our Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;