import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { equipamentos } from '@/data/equipamentos';
import EquipmentPlaceholder from '@/components/catalogo/EquipmentPlaceholder';
import case580m from '@/assets/case-580m.png';

// Get image for equipment
const getEquipImage = (slug: string): string | null => {
  if (slug === 'retroescavadeira-case-580m') return case580m;
  return null;
};

const FeaturedEquipmentList = () => {
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

  const statusConfig = {
    disponivel: {
      label: 'Disponível',
      className: 'bg-success/10 text-success border-success/20',
    },
    'sob-consulta': {
      label: 'Sob consulta',
      className: 'bg-muted text-muted-foreground border-border',
    },
    indisponivel: {
      label: 'Indisponível',
      className: 'bg-muted text-muted-foreground border-border',
    },
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Equipamentos em Destaque</h2>
        <Link to="/catalogo" className="text-sm text-copper hover:underline flex items-center gap-1">
          Ver catálogo
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((equip) => {
          const imageSrc = getEquipImage(equip.slug);
          const status = statusConfig[equip.status];
          
          return (
            <div
              key={equip.id}
              className="group flex flex-col h-full rounded-lg bg-card border border-border overflow-hidden hover:border-copper/30 hover:shadow-soft transition-all"
            >
              {/* Image */}
              <Link to={`/catalogo/${equip.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={equip.nome}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <EquipmentPlaceholder />
                )}
                
                {/* Status badge */}
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className={`${status.className} text-xs backdrop-blur-sm`}>
                    {status.label}
                  </Badge>
                </div>

                {/* Featured badge */}
                {equip.destaque && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-copper/90 text-white border-0 text-xs">
                      Destaque
                    </Badge>
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4">
                <Link to={`/catalogo/${equip.slug}`}>
                  <h3 className="font-semibold text-foreground group-hover:text-copper transition-colors line-clamp-1 mb-1">
                    {equip.nome}
                  </h3>
                </Link>
                
                {/* Metadata line */}
                <p className="text-xs text-muted-foreground mb-auto line-clamp-1">
                  {equip.specs.map(s => s.value).join(' • ')}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-border/50">
                  {equip.preco ? (
                    <div>
                      <span className="text-xs text-muted-foreground">A partir de</span>
                      <p className="text-sm font-semibold text-foreground">{equip.preco}</p>
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground">Valores sob consulta</span>
                  )}
                  <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                    <Link to={`/catalogo/${equip.slug}`}>
                      Detalhes
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedEquipmentList;
