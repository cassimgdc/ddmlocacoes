import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import Equipamento from "./pages/Equipamento";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>DDM Locações - Aluguel de Retroescavadeira em Sete Lagoas</title>
          <meta name="description" content="Aluguel de retroescavadeira com operador em Sete Lagoas e região. Terraplanagem, valas, limpeza de lotes. Orçamento rápido pelo WhatsApp." />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="DDM Locações - Aluguel de Retroescavadeira" />
          <meta property="og:description" content="Retroescavadeira Case 580M com operador experiente. Sete Lagoas e região." />
          <meta property="og:locale" content="pt_BR" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="theme-color" content="#f59e0b" />
        </Helmet>
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DDM Locações",
            "description": "Aluguel de retroescavadeira com operador experiente em Sete Lagoas e região.",
            "telephone": "+55-31-97106-7272",
            "areaServed": "Sete Lagoas e região",
            "priceRange": "$$",
            "openingHours": "Mo-Sa 07:00-18:00",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sete Lagoas",
              "addressRegion": "MG",
              "addressCountry": "BR"
            }
          })}
        </script>
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/equipamento" element={<Equipamento />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
