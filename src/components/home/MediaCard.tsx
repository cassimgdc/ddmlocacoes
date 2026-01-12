interface MediaCardProps {
  type: 'video' | 'image';
  src: string;
  thumbnail?: string;
  alt?: string;
  delay?: number;
}

const MediaCard = ({ type, src, thumbnail, alt = '', delay = 0 }: MediaCardProps) => {
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = type === 'video' ? getYouTubeId(src) : null;

  return (
    <div 
      className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 bg-card border border-border/50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {type === 'video' && youtubeId ? (
        <div className="relative aspect-video">
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
        </div>
      ) : (
        <div className="aspect-video bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Mídia não disponível</span>
        </div>
      )}
    </div>
  );
};

export default MediaCard;
