import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ArrowUpDown, Package, Tractor } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import InternalHero from '@/components/layout/InternalHero';
import CatalogoFilters from '@/components/catalogo/CatalogoFilters';
import MobileFiltersDrawer from '@/components/catalogo/MobileFiltersDrawer';
import EquipamentoCard from '@/components/catalogo/EquipamentoCard';
import QuoteModal from '@/components/catalogo/QuoteModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { equipamentos, Equipamento } from '@/data/equipamentos';
import case580m from '@/assets/case-580m.png';

const ITEMS_PER_PAGE = 12;

type SortOption = 'relevancia' | 'nome-asc' | 'nome-desc' | 'disponivel';

// Override placeholder image for Case 580M with real image
const getEquipamentoImage = (equip: Equipamento) => {
  if (equip.slug === 'retroescavadeira-case-580m') {
    return case580m;
  }
  return equip.imagemPlaceholder;
};

const Catalogo = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('relevancia');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Quote modal state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedEquipamento, setSelectedEquipamento] = useState<Equipamento | null>(null);

  // Handlers
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
    setCurrentPage(1);
  };

  const handleStatusChange = (statusId: string) => {
    setSelectedStatus((prev) =>
      prev.includes(statusId)
        ? prev.filter((s) => s !== statusId)
        : [...prev, statusId]
    );
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedStatus([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleQuote = (equipamento: Equipamento) => {
    setSelectedEquipamento(equipamento);
    setQuoteModalOpen(true);
  };

  // Filter and sort
  const filteredEquipamentos = useMemo(() => {
    let result = [...equipamentos];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.nome.toLowerCase().includes(query) ||
          e.descricaoCurta.toLowerCase().includes(query) ||
          e.categoria.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((e) => selectedCategories.includes(e.categoria));
    }

    // Status filter
    if (selectedStatus.length > 0) {
      result = result.filter((e) => selectedStatus.includes(e.status));
    }

    // Sort
    switch (sortBy) {
      case 'nome-asc':
        result.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      case 'nome-desc':
        result.sort((a, b) => b.nome.localeCompare(a.nome));
        break;
      case 'disponivel':
        result.sort((a, b) => {
          if (a.status === 'disponivel' && b.status !== 'disponivel') return -1;
          if (a.status !== 'disponivel' && b.status === 'disponivel') return 1;
          return 0;
        });
        break;
      case 'relevancia':
      default:
        result.sort((a, b) => {
          if (a.destaque && !b.destaque) return -1;
          if (!a.destaque && b.destaque) return 1;
          if (a.status === 'disponivel' && b.status !== 'disponivel') return -1;
          if (a.status !== 'disponivel' && b.status === 'disponivel') return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [searchQuery, selectedCategories, selectedStatus, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredEquipamentos.length / ITEMS_PER_PAGE);
  const paginatedEquipamentos = filteredEquipamentos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const activeFiltersCount = selectedCategories.length + selectedStatus.length;

  return (
    <Layout>
      <Helmet>
        <title>Catálogo de Equipamentos | DDM Locações - Sete Lagoas</title>
        <meta
          name="description"
          content="Confira nosso catálogo de equipamentos para locação: retroescavadeiras, escavadeiras, rolos compactadores e mais. Aluguel em Sete Lagoas e região."
        />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/catalogo" />
      </Helmet>

      <InternalHero
        badge="Catálogo"
        badgeIcon={Tractor}
        title="Nossos"
        titleHighlight="Equipamentos"
        subtitle="Encontre o equipamento ideal para seu projeto. Todos os aluguéis incluem operador e combustível."
        breadcrumbs={[{ label: 'Catálogo' }]}
      />

      <section className="py-8 md:py-12">
        <div className="container-ddm">
          {/* Top bar: Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar equipamento..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 bg-card border-border"
                aria-label="Buscar equipamentos"
              />
            </div>

            {/* Mobile filters */}
            <div className="flex gap-3 sm:hidden">
              <MobileFiltersDrawer
                selectedCategories={selectedCategories}
                selectedStatus={selectedStatus}
                onCategoryChange={handleCategoryChange}
                onStatusChange={handleStatusChange}
                onClearFilters={handleClearFilters}
                activeFiltersCount={activeFiltersCount}
              />
              
              {/* Sort mobile */}
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-[140px] bg-card border-border">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Ordenar" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  <SelectItem value="relevancia">Relevância</SelectItem>
                  <SelectItem value="nome-asc">Nome A-Z</SelectItem>
                  <SelectItem value="nome-desc">Nome Z-A</SelectItem>
                  <SelectItem value="disponivel">Disponíveis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort desktop */}
            <div className="hidden sm:block">
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-[180px] bg-card border-border">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  <SelectItem value="relevancia">Relevância</SelectItem>
                  <SelectItem value="nome-asc">Nome A-Z</SelectItem>
                  <SelectItem value="nome-desc">Nome Z-A</SelectItem>
                  <SelectItem value="disponivel">Disponíveis primeiro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Main content: Sidebar + Grid */}
          <div className="flex gap-8">
            {/* Desktop sidebar filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 card-premium p-5">
                <CatalogoFilters
                  selectedCategories={selectedCategories}
                  selectedStatus={selectedStatus}
                  onCategoryChange={handleCategoryChange}
                  onStatusChange={handleStatusChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </aside>

            {/* Equipment grid */}
            <div className="flex-1">
              {/* Results count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredEquipamentos.length} equipamento{filteredEquipamentos.length !== 1 ? 's' : ''} encontrado{filteredEquipamentos.length !== 1 ? 's' : ''}
                </p>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                    className="text-muted-foreground hover:text-foreground lg:hidden"
                  >
                    Limpar filtros ({activeFiltersCount})
                  </Button>
                )}
              </div>

              {/* Grid */}
              {paginatedEquipamentos.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                  {paginatedEquipamentos.map((equipamento, index) => (
                    <EquipamentoCard
                      key={equipamento.id}
                      equipamento={{
                        ...equipamento,
                        imagemPlaceholder: getEquipamentoImage(equipamento),
                      }}
                      onQuote={handleQuote}
                      delay={(index % ITEMS_PER_PAGE) * 50}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Package className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Nenhum equipamento encontrado
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Tente ajustar os filtros ou termo de busca
                  </p>
                  <Button variant="outline" onClick={handleClearFilters}>
                    Limpar filtros
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </Button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-9"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Próximo
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        equipamento={selectedEquipamento}
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </Layout>
  );
};

export default Catalogo;
