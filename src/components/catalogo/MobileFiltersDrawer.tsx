import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CatalogoFilters from './CatalogoFilters';

interface MobileFiltersDrawerProps {
  selectedCategories: string[];
  selectedStatus: string[];
  onCategoryChange: (categoryId: string) => void;
  onStatusChange: (statusId: string) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

const MobileFiltersDrawer = ({
  selectedCategories,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
  onClearFilters,
  activeFiltersCount,
}: MobileFiltersDrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
          {activeFiltersCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-card border-border">
        <SheetHeader>
          <SheetTitle className="font-display">Filtrar Equipamentos</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <CatalogoFilters
            selectedCategories={selectedCategories}
            selectedStatus={selectedStatus}
            onCategoryChange={onCategoryChange}
            onStatusChange={onStatusChange}
            onClearFilters={onClearFilters}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFiltersDrawer;
