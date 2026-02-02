import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { categorias, statusOptions } from '@/data/equipamentos';

interface CatalogoFiltersProps {
  selectedCategories: string[];
  selectedStatus: string[];
  onCategoryChange: (categoryId: string) => void;
  onStatusChange: (statusId: string) => void;
  onClearFilters: () => void;
  className?: string;
}

const CatalogoFilters = ({
  selectedCategories,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
  onClearFilters,
  className = '',
}: CatalogoFiltersProps) => {
  const hasFilters = selectedCategories.length > 0 || selectedStatus.length > 0;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-foreground">Filtros</h3>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4 mr-1" />
            Limpar
          </Button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-foreground">Categoria</h4>
        <div className="space-y-2">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="flex items-center gap-3">
              <Checkbox
                id={`cat-${categoria.id}`}
                checked={selectedCategories.includes(categoria.id)}
                onCheckedChange={() => onCategoryChange(categoria.id)}
                aria-label={`Filtrar por ${categoria.nome}`}
              />
              <Label
                htmlFor={`cat-${categoria.id}`}
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                {categoria.nome}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-foreground">Disponibilidade</h4>
        <div className="space-y-2">
          {statusOptions.map((status) => (
            <div key={status.id} className="flex items-center gap-3">
              <Checkbox
                id={`status-${status.id}`}
                checked={selectedStatus.includes(status.id)}
                onCheckedChange={() => onStatusChange(status.id)}
                aria-label={`Filtrar por ${status.nome}`}
              />
              <Label
                htmlFor={`status-${status.id}`}
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                {status.nome}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogoFilters;
