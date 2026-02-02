import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
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
  const allFeatured = equipamentos
    .sort((a, b) => {
      if (a.destaque && !b.destaque) return -1;
      if (!a.destaque && b.destaque) return 1;
      if (a.status === 'disponivel' && b.status !== 'disponivel') return -1;
      if (a.status !== 'disponivel' && b.status === 'disponivel') return 1;
      return 0;
    })
    .slice(0, 5);

  const heroItem = allFeatured[0];
  const gridItems = allFeatured.slice(1, 5);

  const handleQuote = (equipName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${equipName}`);
    window.open(`https://wa.me/5531971067272?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-muted/40 border-y border-border/60">
      <div className="container-ddm">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Prontos para locação</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Mais Solicitados
            </h2>
            <p className="text-muted-foreground mt-1">
              Atendimento rápido e equipamentos revisados
            </p>
          </div>
          <Link 
            to="/catalogo" 
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Ver todos
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Layout: 1 Hero + Grid */}
        <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
          {/* Hero Item - Large Card */}
          {heroItem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all duration-300 lg:row-span-2"
            >
              {/* Image */}
              <Link 
                to={`/catalogo/${heroItem.slug}`} 
                className="block relative aspect-[4/3] overflow-hidden bg-muted"
              >
                {heroItem.status === 'disponivel' ? (
                  <>
                    <img
                      src={getEquipImage(heroItem.slug)}
                      alt={heroItem.nome}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 text-xs px-3 py-1.5 rounded-full bg-success text-white font-medium shadow-sm">
                      Disponível agora
                    </span>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4">
                    <Clock className="w-10 h-10 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">Sob consulta</span>
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="p-5 md:p-6">
                <Link to={`/catalogo/${heroItem.slug}`}>
                  <h3 className="font-bold text-foreground text-xl md:text-2xl group-hover:text-primary transition-colors">
                    {heroItem.nome}
                  </h3>
                </Link>
                
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  Equipamento de alta performance para {heroItem.categoria}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {heroItem.specs.slice(0, 3).map((spec, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground">
                      {spec.value}
                    </span>
                  ))}
                </div>

                {/* Price & CTAs */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/60">
                  {heroItem.preco ? (
                    <div>
                      <span className="text-2xl font-bold text-copper">{heroItem.preco}</span>
                      <span className="text-sm text-muted-foreground ml-1">/dia</span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground">Sob consulta</span>
                  )}
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="h-9 px-4"
                    >
                      <Link to={`/catalogo/${heroItem.slug}`}>
                        Ver detalhes
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      className="h-9 px-4 bg-primary hover:bg-primary/90"
                      onClick={() => handleQuote(heroItem.nome)}
                    >
                      <MessageCircle className="w-4 h-4 mr-1.5" />
                      Orçar
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid Items - 2x2 */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {gridItems.map((equip, index) => (
              <motion.div
                key={equip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.08 }}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300"
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
                      <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-success/90 text-white font-medium">
                        Disponível
                      </span>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-3">
                      <Clock className="w-6 h-6 text-muted-foreground mb-1" />
                      <span className="text-xs text-muted-foreground">Consulte</span>
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-3 md:p-4">
                  <Link to={`/catalogo/${equip.slug}`}>
                    <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors line-clamp-1">
                      {equip.nome}
                    </h3>
                  </Link>
                  
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {equip.specs.slice(0, 2).map(s => s.value).join(' • ')}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
                    {equip.preco ? (
                      <span className="text-sm font-semibold text-copper">{equip.preco}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground">Consulte</span>
                    )}
                    
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="h-7 text-xs px-2 text-primary hover:text-primary"
                      onClick={() => handleQuote(equip.nome)}
                    >
                      Orçar
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile link */}
        <Link 
          to="/catalogo" 
          className="flex sm:hidden items-center justify-center gap-1.5 text-sm text-muted-foreground mt-8"
        >
          Ver todos os equipamentos
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedShowcase;