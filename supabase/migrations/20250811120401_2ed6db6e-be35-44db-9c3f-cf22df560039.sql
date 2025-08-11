-- Add missing product fields for categories and merchandising
ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'General',
  ADD COLUMN IF NOT EXISTS original_price NUMERIC,
  ADD COLUMN IF NOT EXISTS rating NUMERIC DEFAULT 0,
  ADD COLUMN IF NOT EXISTS reviews INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS is_new BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS is_bestseller BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS in_stock BOOLEAN NOT NULL DEFAULT true;

-- Seed products based on existing static items
INSERT INTO public.products (name, price, original_price, image_url, description, category, rating, reviews, is_new, is_bestseller, in_stock)
VALUES
  (
    'Rajasthani Elephant Fridge Magnets Set',
    299,
    399,
    '/placeholder.svg',
    'Beautiful hand-painted ceramic fridge magnets featuring traditional Rajasthani elephant motifs in vibrant colors.',
    'Fridge Magnets',
    4.8,
    124,
    false,
    true,
    true
  ),
  (
    'Traditional Phad Painting - Folk Tale',
    2499,
    3299,
    '/placeholder.svg',
    'Authentic Rajasthani Phad painting depicting traditional folk tales, hand-painted by skilled artisans.',
    'Phad Paintings',
    4.9,
    67,
    true,
    false,
    true
  ),
  (
    'Mandala Painted Stones Collection',
    899,
    1199,
    '/placeholder.svg',
    'Set of 6 beautifully hand-painted stones with intricate mandala patterns, perfect for home decoration.',
    'Painted Stones',
    4.7,
    89,
    false,
    false,
    true
  ),
  (
    'Peacock Motif Fridge Magnets',
    349,
    NULL,
    '/placeholder.svg',
    'Elegant peacock-themed fridge magnets with traditional Rajasthani artistry and vibrant colors.',
    'Fridge Magnets',
    4.6,
    156,
    false,
    false,
    true
  ),
  (
    'Miniature Phad Art - Krishna Story',
    1899,
    2499,
    '/placeholder.svg',
    'Miniature Phad painting narrating the Krishna story, featuring intricate details and traditional techniques.',
    'Phad Paintings',
    4.8,
    43,
    false,
    true,
    true
  ),
  (
    'Floral Design Painted Stones',
    649,
    NULL,
    '/placeholder.svg',
    'Beautiful stones painted with delicate floral patterns using natural pigments and traditional methods.',
    'Painted Stones',
    4.5,
    92,
    true,
    false,
    true
  ),
  (
    'Ceramic Garden Planters Set',
    1299,
    1699,
    '/placeholder.svg',
    'Beautiful ceramic planters with traditional Indian patterns, perfect for your garden or balcony.',
    'Garden Decor',
    4.7,
    78,
    true,
    false,
    true
  ),
  (
    'Garden Wind Chimes - Peacock Design',
    799,
    NULL,
    '/placeholder.svg',
    'Melodious wind chimes with intricate peacock design, handcrafted by traditional artisans.',
    'Garden Decor',
    4.5,
    65,
    false,
    false,
    true
  );