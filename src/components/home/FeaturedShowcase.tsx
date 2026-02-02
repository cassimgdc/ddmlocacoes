import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { equipamentos } from '@/data/equipamentos';
import case580m from '@/assets/case-580m.png';
import { motion } from 'framer-motion';

// Get image for equipment
const getEquipImage = (slug: string) => {
  if (slug === 'retroescavadeira-case-580m') return case580m;
  return '/placeholder.svg';
};

const FeaturedShowcase = () => {
  // Get featured/available items first
  const featured = equipamentos
    .sort((a, b) => {
      if (a.destaque && !b.destaque) return -1;
      if (!a.destaque && b.destaque) return 1;
      if (a.status === 'disponivel' && b.status !== 'disponivel') return -1;
      if (a.status !== 'disponivel' && b.status === 'disponivel') return 1;
      return 0;
    })
    .slice(0, 6);

  const handleQuote = (equipName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${equipName}`);
    window.open(`https://wa.me/5531971067272?text=${message}`, '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
      <div className="container-ddm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mais solicitados</h2>
            <p className="text-muted-foreground mt-1">Equipamentos prontos para locação</p>
          </div>
          <Link 
            to="/catalogo" 
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-copper hover:underline"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Showcase Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featured.map((equip, index) => (
            <motion.div
              key={equip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-copper/30 hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <Link 
                to={`/catalogo/${equip.slug}`} 
                className="block relative aspect-[16/10] overflow-hidden bg-muted"
              >
                {equip.status === 'disponivel' ? (
                  <>
                    <img
                      src={getEquipImage(equip.slug)}
                      alt={equip.nome}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Status indicator - subtle */}
                    <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-success/90 text-white font-medium">
                      Disponível
                    </span>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4">
                    <Clock className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">Sob consulta</span>
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="p-4 md:p-5">
                <Link to={`/catalogo/${equip.slug}`}>
                  <h3 className="font-semibold text-foreground text-base group-hover:text-copper transition-colors line-clamp-1">
                    {equip.nome}
                  </h3>
                </Link>
                
                {/* Specs line */}
                <p className="text-sm text-muted-foreground mt-1.5 line-clamp-1">
                  {equip.specs.map(s => s.value).join(' • ')}
                </p>

                {/* Price & CTAs */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                  {equip.preco ? (
                    <span className="text-base font-semibold text-copper">{equip.preco}</span>
                  ) : (
                    <span className="text-sm text-muted-foreground">Sob consulta</span>
                  )}
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild 
                      className="h-8 text-xs px-3"
                    >
                      <Link to={`/catalogo/${equip.slug}`}>
                        Detalhes
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      className="h-8 text-xs px-3 bg-copper hover:bg-copper/90"
                      onClick={() => handleQuote(equip.nome)}
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1" />
                      Orçar
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile link */}
        <Link 
          to="/catalogo" 
          className="flex sm:hidden items-center justify-center gap-2 text-sm font-medium text-copper mt-6"
        >
          Ver todos os equipamentos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedShowcase;
