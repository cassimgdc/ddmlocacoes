import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/components/ui/theme-provider";

// Pages
import Index from "./pages/Index";
import Catalogo from "./pages/Catalogo";
import CatalogoDetalhe from "./pages/CatalogoDetalhe";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Duvidas from "./pages/Duvidas";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const siteUrl = "https://ddmlocacoes.lovable.app";
const ogImageUrl = `${siteUrl}/og-image.png`;

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" storageKey="ddm-theme" enableSystem={false}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Helmet>
          {/* Primary Meta Tags */}
          <title>DDM Locações - Aluguel de Retroescavadeira em Sete Lagoas</title>
          <meta name="title" content="DDM Locações - Aluguel de Retroescavadeira em Sete Lagoas" />
          <meta name="description" content="Aluguel de retroescavadeira Case 580M com operador experiente em Sete Lagoas e região. Terraplanagem, abertura de valas, limpeza de lotes. Orçamento rápido pelo WhatsApp." />
          <meta name="keywords" content="retroescavadeira, aluguel, sete lagoas, terraplanagem, escavação, valas, limpeza de lotes, Case 580M, MG" />
          <meta name="author" content="DDM Locações" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={siteUrl} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:title" content="DDM Locações - Aluguel de Retroescavadeira" />
          <meta property="og:description" content="Retroescavadeira Case 580M com operador experiente. Terraplanagem, valas e limpeza de lotes em Sete Lagoas e região. Orçamento pelo WhatsApp." />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="DDM Locações" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={siteUrl} />
          <meta name="twitter:title" content="DDM Locações - Aluguel de Retroescavadeira" />
          <meta name="twitter:description" content="Retroescavadeira Case 580M com operador experiente. Sete Lagoas e região." />
          <meta name="twitter:image" content={ogImageUrl} />
          
          {/* Mobile & Theme */}
          <meta name="theme-color" content="#f59e0b" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          
          {/* Geo Tags */}
          <meta name="geo.region" content="BR-MG" />
          <meta name="geo.placename" content="Sete Lagoas" />
        </Helmet>
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DDM Locações",
            "description": "Aluguel de retroescavadeira com operador experiente em Sete Lagoas e região. Serviços de terraplanagem, abertura de valas, limpeza de lotes e escavações.",
            "url": siteUrl,
            "telephone": "+55-31-97106-7272",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -19.4657,
                "longitude": -44.2467
              },
              "geoRadius": "50000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Sa 07:00-18:00",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sete Lagoas",
              "addressRegion": "MG",
              "addressCountry": "BR"
            },
            "sameAs": [
              "https://wa.me/5531971067272"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Retroescavadeira",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Aluguel por Hora",
                    "description": "Retroescavadeira com operador - mínimo 2 horas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Terraplanagem"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Abertura de Valas"
                  }
                }
              ]
            }
          })}
          </script>
          
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/catalogo/:slug" element={<CatalogoDetalhe />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/duvidas" element={<Duvidas />} />
              <Route path="/politica-de-privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<Termos />} />
              {/* Redirects para rotas antigas */}
              <Route path="/equipamento" element={<CatalogoDetalhe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
