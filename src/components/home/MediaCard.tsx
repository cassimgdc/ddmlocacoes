import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MediaCardProps {
  type: 'video' | 'image';
  src: string;
  thumbnail?: string;
  alt?: string;
  title?: string;
  delay?: number;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const MediaCard = ({ 
  type, 
  src, 
  thumbnail, 
  alt = '', 
  title, 
  delay = 0,
  autoplay = true,
  loop = true,
  muted = true 
}: MediaCardProps) => {
  const [isMuted, setIsMuted] = useState(muted);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = type === 'video' ? getYouTubeId(src) : null;
  const isShorts = src.includes('/shorts/');

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Build YouTube embed URL with autoplay, loop, and mute parameters
  const getYouTubeEmbedUrl = () => {
    if (!youtubeId) return '';
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      loop: loop ? '1' : '0',
      mute: isMuted ? '1' : '0',
      playlist: youtubeId, // Required for loop to work
      controls: '0',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
    });
    return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
  };

  return (
    <div 
      className="group relative overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Decorative frame */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 via-accent/20 to-primary/40 rounded-2xl blur-sm" />
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/60 to-accent/40 rounded-xl" />
      
      {/* Content container */}
      <div className="relative bg-card rounded-lg overflow-hidden">
        {type === 'video' && youtubeId ? (
          <div className={`relative ${isShorts ? 'aspect-[9/16] max-h-[450px]' : 'aspect-video'}`}>
            <iframe
              ref={iframeRef}
              key={isMuted ? 'muted' : 'unmuted'} // Force re-render on mute change
              src={getYouTubeEmbedUrl()}
              title={alt || "Vídeo DDM Locações"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            
            {/* Mute/Unmute button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-10 bg-background/90 backdrop-blur-sm hover:bg-background text-foreground p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-border/50"
              aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            {/* Subtle overlay gradient */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
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
    </div>
  );
};

export default MediaCard;
