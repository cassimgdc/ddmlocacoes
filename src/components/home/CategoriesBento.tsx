import { Link } from 'react-router-dom';
import { Shovel, Mountain, Trees, Truck, Construction, Tractor, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SteelDivider from '@/components/brand/SteelDivider';
import DDMPattern from '@/components/brand/DDMPattern';

const categories = [
  {
    icon: Shovel,
    title: 'Escavação',
    description: 'Retroescavadeiras para obras de qualquer porte',
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
    description: 'Remoção de entulhos e preparo do terreno',
    href: '/servicos#limpeza-lotes',
  },
  {
    icon: Tractor,
    title: 'Serviços Rurais',
    description: 'Açudes, estradas rurais e curvas de nível',
    href: '/servicos#servicos-rurais',
  },
];

const CategoriesBento = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-ddm">
        {/* Steel Divider - Brand signature */}
        <SteelDivider icon="shovel" className="mb-8" />
        
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Categorias de Equipamentos
            </h2>
            <p className="text-muted-foreground mt-2 text-base">
              Encontre a solução ideal para sua obra ou projeto
            </p>
          </div>
          <Link 
            to="/catalogo" 
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Ver catálogo completo
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid - 6 cards with DDM chamfer */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <Link
                to={category.href}
                className="card-ddm group relative flex flex-col h-full min-h-[180px] md:min-h-[200px] p-5 md:p-6"
              >
                {/* Subtle pattern overlay */}
                <DDMPattern variant="minimal" />
                
                {/* Accent corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with chamfer shape */}
                  <div className="w-12 h-12 md:w-14 md:h-14 ddm-chamfer-tr-sm bg-muted flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <category.icon className="w-6 h-6 md:w-7 md:h-7 text-accent group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  {/* CTA Arrow */}
                  <div className="flex items-center gap-1 text-sm font-medium text-accent mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    Explorar
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile link */}
        <Link 
          to="/catalogo" 
          className="flex sm:hidden items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-8"
        >
          Ver catálogo completo
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesBento;
