import { Link } from 'react-router-dom';
import { Shovel, Mountain, Trees, Truck, Construction, Tractor, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Shovel,
    title: 'Escavação',
    description: 'Retroescavadeiras e mini escavadeiras',
    href: '/catalogo?categoria=escavacao',
  },
  {
    icon: Mountain,
    title: 'Terraplanagem',
    description: 'Pás carregadeiras e motoniveladoras',
    href: '/catalogo?categoria=terraplanagem',
  },
  {
    icon: Construction,
    title: 'Compactação',
    description: 'Rolos compactadores e placas vibratórias',
    href: '/catalogo?categoria=compactacao',
  },
  {
    icon: Truck,
    title: 'Transporte',
    description: 'Caminhões basculantes e pipas',
    href: '/catalogo?categoria=transporte',
  },
  {
    icon: Trees,
    title: 'Limpeza de Lotes',
    description: 'Remoção de entulhos e vegetação',
    href: '/servicos#limpeza-lotes',
  },
  {
    icon: Tractor,
    title: 'Serviços Rurais',
    description: 'Açudes, estradas e curvas de nível',
    href: '/servicos#servicos-rurais',
  },
];

const CategoryGrid = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Categorias</h2>
        <Link to="/catalogo" className="text-sm text-accent hover:underline flex items-center gap-1">
          Ver todos
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.href}
            className="group p-3 rounded-lg bg-card border border-border hover:border-copper/30 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <category.icon className="w-4 h-4 text-accent group-hover:text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
