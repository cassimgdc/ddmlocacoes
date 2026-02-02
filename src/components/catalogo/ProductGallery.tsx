import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = images[selectedIndex] || images[0];

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative group">
        <div 
          className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary/50 to-muted/30 border border-border/50 overflow-hidden cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
          <img
            src={currentImage}
            alt={alt}
            className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Zoom hint */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm border border-border/50 flex items-center gap-2 text-sm text-muted-foreground">
              <ZoomIn className="w-4 h-4" />
              Ampliar
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === selectedIndex
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-border/50 hover:border-border'
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img
                src={image}
                alt={`${alt} - miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Zoom modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-4xl bg-card border-border p-2">
          <DialogTitle className="sr-only">{alt} - Imagem ampliada</DialogTitle>
          <div className="relative">
            <img
              src={currentImage}
              alt={alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Navigation in modal */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm"
                  onClick={goToPrevious}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm"
                  onClick={goToNext}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}
          </div>
          
          {/* Thumbnails in modal */}
          {images.length > 1 && (
            <div className="flex gap-2 justify-center mt-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedIndex
                      ? 'border-primary'
                      : 'border-border/50 hover:border-border'
                  }`}
                  aria-label={`Ver imagem ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${alt} - miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductGallery;
