import { Link } from 'react-router-dom';
import { Shovel, Mountain, Trees, Truck, Construction, Tractor, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    icon: Shovel,
    title: 'Escavação',
    description: 'Retroescavadeiras e mini escavadeiras para obras de qualquer porte',
    href: '/catalogo?categoria=escavacao',
    featured: true,
  },
  {
    icon: Mountain,
    title: 'Terraplanagem',
    description: 'Pás carregadeiras, motoniveladoras e tratores de esteira',
    href: '/catalogo?categoria=terraplanagem',
    featured: true,
  },
  {
    icon: Construction,
    title: 'Compactação',
    description: 'Rolos compactadores e placas vibratórias',
    href: '/catalogo?categoria=compactacao',
    featured: false,
  },
  {
    icon: Truck,
    title: 'Transporte',
    description: 'Caminhões basculantes e pipas',
    href: '/catalogo?categoria=transporte',
    featured: false,
  },
  {
    icon: Trees,
    title: 'Limpeza de Lotes',
    description: 'Remoção de entulhos, vegetação e preparo do terreno',
    href: '/servicos#limpeza-lotes',
    featured: false,
  },
  {
    icon: Tractor,
    title: 'Serviços Rurais',
    description: 'Açudes, estradas rurais e curvas de nível',
    href: '/servicos#servicos-rurais',
    featured: false,
  },
];

const CategoriesBento = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-ddm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Categorias</h2>
            <p className="text-muted-foreground mt-1">Encontre o equipamento ideal para sua obra</p>
          </div>
          <Link 
            to="/catalogo" 
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-copper hover:underline"
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                to={category.href}
                className={`group relative block overflow-hidden rounded-xl border border-border bg-card p-5 md:p-6 transition-all duration-300 hover:border-copper/40 hover:shadow-elevated ${
                  category.featured ? 'md:row-span-1' : ''
                }`}
              >
              {/* Background subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-copper/0 to-copper/0 group-hover:from-copper/5 group-hover:to-transparent transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-copper group-hover:scale-105 transition-all duration-300">
                  <category.icon className="w-6 h-6 md:w-7 md:h-7 text-copper group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-copper transition-colors mb-2">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1 text-sm font-medium text-copper opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile link */}
        <Link 
          to="/catalogo" 
          className="flex sm:hidden items-center justify-center gap-2 text-sm font-medium text-copper mt-6"
        >
          Ver catálogo completo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesBento;
