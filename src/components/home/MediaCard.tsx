import { Play } from 'lucide-react';

interface MediaCardProps {
  type: 'video' | 'image';
  src: string;
  thumbnail?: string;
  alt?: string;
  title?: string;
  delay?: number;
}

const MediaCard = ({ type, src, thumbnail, alt = '', title, delay = 0 }: MediaCardProps) => {
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = type === 'video' ? getYouTubeId(src) : null;
  const isShorts = src.includes('/shorts/');

  return (
    <div 
      className="group card-premium overflow-hidden hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {type === 'video' && youtubeId ? (
        <div className={`relative ${isShorts ? 'aspect-[9/16] max-h-[400px]' : 'aspect-video'}`}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={alt || "Vídeo DDM Locações"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : type === 'image' ? (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="aspect-video bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Mídia não disponível</span>
        </div>
      )}
      
      {title && (
        <div className="p-4">
          <h4 className="font-semibold text-foreground text-sm">{title}</h4>
        </div>
      )}
    </div>
  );
};

export default MediaCard;
