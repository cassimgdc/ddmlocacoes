import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import Equipamentos from "./pages/Equipamentos";
import EquipamentoDetalhe from "./pages/EquipamentoDetalhe";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>DDM Locações - Locação de Máquinas com Operador em Sete Lagoas</title>
          <meta name="description" content="Locação de retroescavadeira com operador em Sete Lagoas e região. Terraplanagem, valas, limpeza de lotes, escavação. Atendimento rápido e máquinas revisadas. (31) 97106-7272" />
          <meta name="keywords" content="locação retroescavadeira, aluguel máquinas, terraplanagem sete lagoas, abertura de valas, limpeza de lote, escavação, operador de máquinas" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ddmlocacao.com.br" />
          
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="DDM Locações - Locação de Máquinas com Operador" />
          <meta property="og:description" content="Retroescavadeira Case 580M com operador experiente. Terraplanagem, valas, limpeza. Sete Lagoas e região." />
          <meta property="og:url" content="https://ddmlocacao.com.br" />
          <meta property="og:locale" content="pt_BR" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="DDM Locações - Locação de Máquinas com Operador" />
          <meta name="twitter:description" content="Retroescavadeira com operador em Sete Lagoas. Terraplanagem, valas, limpeza." />
          
          {/* Viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#f59e0b" />
        </Helmet>
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DDM Locações",
            "description": "Locação de máquinas com operador em Sete Lagoas e região. Retroescavadeira, terraplanagem, valas, limpeza de lotes.",
            "url": "https://ddmlocacao.com.br",
            "telephone": "+55-31-97106-7272",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sete Lagoas",
              "addressRegion": "MG",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -19.4619,
              "longitude": -44.2469
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "07:00",
              "closes": "18:00"
            },
            "priceRange": "$$",
            "areaServed": [
              "Sete Lagoas",
              "Prudente de Morais",
              "Capim Branco",
              "Funilândia",
              "Jequitibá",
              "Paraopeba"
            ]
          })}
        </script>
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/equipamentos/case-580m" element={<EquipamentoDetalhe />} />
            <Route path="/contato" element={<Contato />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
