import fridgeMagnetsImg from "@/assets/fridge-magnets.jpg";
import phadPaintingImg from "@/assets/phad-painting.jpg";
import paintedStonesImg from "@/assets/painted-stones.jpg";
import gardenDecorImg from "@/assets/garden-decor.jpg";

export interface Product {
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

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Rajasthani Elephant Fridge Magnets Set",
    price: 299,
    originalPrice: 399,
    image: fridgeMagnetsImg,
    rating: 4.8,
    reviews: 124,
    category: "Fridge Magnets",
    isBestseller: true,
    description: "Beautiful hand-painted ceramic fridge magnets featuring traditional Rajasthani elephant motifs in vibrant colors.",
    inStock: true,
  },
  {
    id: "2",
    name: "Traditional Phad Painting - Folk Tale",
    price: 2499,
    originalPrice: 3299,
    image: phadPaintingImg,
    rating: 4.9,
    reviews: 67,
    category: "Phad Paintings",
    isNew: true,
    description: "Authentic Rajasthani Phad painting depicting traditional folk tales, hand-painted by skilled artisans.",
    inStock: true,
  },
  {
    id: "3",
    name: "Mandala Painted Stones Collection",
    price: 899,
    originalPrice: 1199,
    image: paintedStonesImg,
    rating: 4.7,
    reviews: 89,
    category: "Painted Stones",
    description: "Set of 6 beautifully hand-painted stones with intricate mandala patterns, perfect for home decoration.",
    inStock: true,
  },
  {
    id: "4",
    name: "Peacock Motif Fridge Magnets",
    price: 349,
    image: fridgeMagnetsImg,
    rating: 4.6,
    reviews: 156,
    category: "Fridge Magnets",
    description: "Elegant peacock-themed fridge magnets with traditional Rajasthani artistry and vibrant colors.",
    inStock: true,
  },
  {
    id: "5",
    name: "Miniature Phad Art - Krishna Story",
    price: 1899,
    originalPrice: 2499,
    image: phadPaintingImg,
    rating: 4.8,
    reviews: 43,
    category: "Phad Paintings",
    isBestseller: true,
    description: "Miniature Phad painting narrating the Krishna story, featuring intricate details and traditional techniques.",
    inStock: true,
  },
  {
    id: "6",
    name: "Floral Design Painted Stones",
    price: 649,
    image: paintedStonesImg,
    rating: 4.5,
    reviews: 92,
    category: "Painted Stones",
    isNew: true,
    description: "Beautiful stones painted with delicate floral patterns using natural pigments and traditional methods.",
    inStock: true,
  },
  {
    id: "7",
    name: "Ceramic Garden Planters Set",
    price: 1299,
    originalPrice: 1699,
    image: gardenDecorImg,
    rating: 4.7,
    reviews: 78,
    category: "Garden Decor",
    isNew: true,
    description: "Beautiful ceramic planters with traditional Indian patterns, perfect for your garden or balcony.",
    inStock: true,
  },
  {
    id: "8",
    name: "Garden Wind Chimes - Peacock Design",
    price: 799,
    image: gardenDecorImg,
    rating: 4.5,
    reviews: 65,
    category: "Garden Decor",
    description: "Melodious wind chimes with intricate peacock design, handcrafted by traditional artisans.",
    inStock: true,
  },
];

export const categories = [
  {
    id: "fridge-magnets",
    name: "Fridge Magnets",
    description: "Colorful and artistic fridge magnets",
    image: fridgeMagnetsImg,
    productCount: 45,
  },
  {
    id: "phad-paintings",
    name: "Phad Paintings",
    description: "Traditional Rajasthani storytelling art",
    image: phadPaintingImg,
    productCount: 23,
  },
  {
    id: "painted-stones",
    name: "Painted Stones",
    description: "Hand-painted decorative stones",
    image: paintedStonesImg,
    productCount: 38,
  },
  {
    id: "garden-decor",
    name: "Garden Decor",
    description: "Beautiful outdoor decorative pieces",
    image: gardenDecorImg,
    productCount: 32,
  },
];