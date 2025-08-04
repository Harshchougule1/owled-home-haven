import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import FridgeMagnets from "./pages/FridgeMagnets";
import PhadPaintings from "./pages/PhadPaintings";
import PaintedStones from "./pages/PaintedStones";
import GardenDecor from "./pages/GardenDecor";
import Collections from "./pages/Collections";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fridge-magnets" element={<FridgeMagnets />} />
            <Route path="/phad-paintings" element={<PhadPaintings />} />
            <Route path="/painted-stones" element={<PaintedStones />} />
            <Route path="/garden-decor" element={<GardenDecor />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
