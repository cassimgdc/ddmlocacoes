import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';
import EquipmentCard from '@/components/home/EquipmentCard';
import { Search, Filter, ArrowLeft } from 'lucide-react';

import case580m from '@/assets/case-580m.png';

const Equipamentos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    'Todos',
    'Terraplanagem',
    'Valas',
    'Rural',
    'Transporte',
    'Escavação',
  ];

  const equipments = [
    {
      id: 'case-580m',
      name: 'Retroescavadeira Case 580M',
      image: case580m,
      available: true,
      tags: ['Terraplanagem', 'Valas', 'Rural', 'Escavação'],
      services: ['Abertura de valas', 'Terraplanagem', 'Escavação', 'Limpeza de lotes', 'Serviços rurais', 'Carregamento'],
    },
    {
      id: 'caminhao-basculante',
      name: 'Caminhão Basculante',
      image: '',
      available: false,
      tags: ['Transporte', 'Entulho'],
      services: ['Transporte de material', 'Remoção de entulho', 'Carga e descarga'],
      comingSoon: true,
    },
    {
      id: 'mini-escavadeira',
      name: 'Mini Escavadeira',
      image: '',
      available: false,
      tags: ['Valas', 'Escavação'],
      services: ['Valas em áreas pequenas', 'Fundações', 'Espaços reduzidos'],
      comingSoon: true,
    },
    {
      id: 'pa-carregadeira',
      name: 'Pá Carregadeira',
      image: '',
      available: false,
      tags: ['Terraplanagem', 'Transporte'],
      services: ['Movimentação de grandes volumes', 'Carregamento', 'Terraplanagem'],
      comingSoon: true,
    },
  ];

  const filteredEquipments = equipments.filter((equipment) => {
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || selectedCategory === 'Todos' ||
      equipment.tags.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container-ddm">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Catálogo</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Nossos Equipamentos
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl">
            Máquinas de qualidade, revisadas e com operador experiente. Escolha o equipamento ideal para seu projeto.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container-ddm">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar equipamento ou serviço..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category || (category === 'Todos' && !selectedCategory) ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category === 'Todos' ? null : category)}
                  className="flex-shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="section-padding bg-background">
        <div className="container-ddm">
          {filteredEquipments.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-6">
                {filteredEquipments.length} equipamento{filteredEquipments.length !== 1 ? 's' : ''} encontrado{filteredEquipments.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEquipments.map((equipment, index) => (
                  <EquipmentCard key={equipment.id} {...equipment} delay={index * 100} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">Nenhum equipamento encontrado.</p>
              <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted">
        <div className="container-ddm text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Não encontrou o que precisa?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Estamos sempre expandindo nossa frota. Entre em contato e conte-nos o que você precisa.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="https://wa.me/5531971067272?text=Olá! Gostaria de saber sobre outros equipamentos disponíveis." target="_blank" rel="noopener noreferrer">
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Equipamentos;
