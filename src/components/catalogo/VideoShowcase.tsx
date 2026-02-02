import { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface VideoShowcaseProps {
  videoUrl: string;
  title?: string;
  subtitle?: string;
  highlights?: string[];
}

const VideoShowcase = ({
  videoUrl,
  title = 'Em Ação',
  subtitle = 'Veja o equipamento trabalhando em obras reais',
  highlights = [],
}: VideoShowcaseProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(videoUrl);
  const isShorts = videoUrl.includes('/shorts/');

  const sendCommand = (func: string) => {
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.postMessage(
        JSON.stringify({
          event: 'command',
          func,
        }),
        '*'
      );
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    sendCommand(newMuted ? 'mute' : 'unMute');
  };

  const togglePlay = () => {
    const newPlaying = !isPlaying;
    setIsPlaying(newPlaying);
    sendCommand(newPlaying ? 'playVideo' : 'pauseVideo');
  };

  const getYouTubeEmbedUrl = () => {
    if (!youtubeId) return '';
    const params = new URLSearchParams({
      autoplay: '1',
      loop: '1',
      mute: '1',
      playlist: youtubeId,
      controls: '0',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      enablejsapi: '1',
    });
    return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
  };

  if (!youtubeId) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium text-success uppercase tracking-wide">Ao vivo</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* Video container with professional styling */}
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/40 rounded-tl-2xl z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/40 rounded-br-2xl z-10 pointer-events-none" />

        {/* Video iframe */}
        <div className={`relative ${isShorts ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'}`}>
          <iframe
            ref={iframeRef}
            src={getYouTubeEmbedUrl()}
            title="Equipamento em ação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />

          {/* Gradient overlay at bottom for controls */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {/* Video controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
            {/* Left: Play/Pause */}
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full transition-all duration-200"
              aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
            </button>

            {/* Right: Volume + Fullscreen */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full transition-all duration-200"
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Highlights bar below video */}
        {highlights.length > 0 && (
          <div className="p-4 bg-muted/50 border-t border-border">
            <div className="flex flex-wrap gap-2 justify-center">
              {highlights.map((highlight, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-card border border-border text-foreground text-xs px-3 py-1"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Caption */}
      <p className="text-xs text-muted-foreground text-center mt-3">
        Imagens reais de serviços realizados pela DDM Locações
      </p>
    </motion.div>
  );
};

export default VideoShowcase;
