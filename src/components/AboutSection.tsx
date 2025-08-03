import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Palette } from "lucide-react";

const AboutSection = () => {
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-owl-brown">
                Preserving India's Rich
                <span className="text-owl-amber block">Artistic Heritage</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Owled Store was born from a passion for Indian handicrafts and a desire to bring authentic, traditional art pieces to modern homes. We believe that every handmade item carries within it the soul of its creator and the stories of ancient traditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the vibrant Phad paintings of Rajasthan that narrate epic tales, to the intricate mandala patterns on painted stones, each piece in our collection is a testament to India's incredible artistic diversity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-owl-brown hover:bg-owl-brown/90 text-primary-foreground">
                Read Our Story
              </Button>
              <Button size="lg" variant="outline" className="border-owl-brown text-owl-brown hover:bg-owl-brown hover:text-primary-foreground">
                Meet Our Artisans
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-owl-cream to-background border-border/50">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-owl-brown">5+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-owl-warm to-background border-border/50">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-owl-brown">50+</div>
                <div className="text-sm text-muted-foreground">Partner Artisans</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-owl-amber/20 to-background border-border/50">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-owl-brown">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-owl-cream to-owl-warm border-border/50">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-owl-brown">15+</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
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
  );
};

export default AboutSection;