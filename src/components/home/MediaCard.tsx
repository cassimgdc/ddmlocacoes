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

  // Mantém o parâmetro `mute` do iframe estável para evitar reload/restart.
  // (Autoplay em mobile normalmente exige iniciar mutado.)
  const initialMutedRef = useRef<boolean>(autoplay ? true : muted);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = type === 'video' ? getYouTubeId(src) : null;
  const isShorts = src.includes('/shorts/');

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    // Usa postMessage para mudar mute sem recarregar o iframe
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.postMessage(
        JSON.stringify({
          event: 'command',
          func: newMuted ? 'mute' : 'unMute',
        }),
        '*'
      );
    }
  };

  // Build YouTube embed URL with autoplay and loop. O mute inicial é fixo para não reiniciar o player.
  const getYouTubeEmbedUrl = () => {
    if (!youtubeId) return '';
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      loop: loop ? '1' : '0',
      mute: initialMutedRef.current ? '1' : '0',
      playlist: youtubeId, // Required for loop to work
      controls: '0',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      enablejsapi: '1', // Necessário para postMessage funcionar
    });
    return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
  };

  return (
    <div 
      className="group relative opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        {/* Video container - clean, no decorative borders */}
        <div className="relative overflow-hidden rounded-xl">
          {type === 'video' && youtubeId ? (
            <div className={`relative ${isShorts ? 'aspect-[9/16]' : 'aspect-video'}`}>
              <iframe
                ref={iframeRef}
                src={getYouTubeEmbedUrl()}
                title={alt || "Vídeo DDM Locações"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : type === 'image' ? (
            <div className="relative aspect-video overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Mídia não disponível</span>
            </div>
          )}
          
          {title && (
            <div className="p-4 bg-card">
              <h4 className="font-semibold text-foreground text-sm">{title}</h4>
            </div>
          )}
        </div>

        {/* Mute/Unmute button - positioned outside to the right */}
        {type === 'video' && youtubeId && (
          <button
            onClick={toggleMute}
            className="absolute -right-14 top-1/2 -translate-y-1/2 bg-card hover:bg-muted text-foreground p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-border/50 touch-feedback"
            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
