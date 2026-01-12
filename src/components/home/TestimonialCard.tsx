import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
  delay?: number;
}

const TestimonialCard = ({ name, location, text, rating = 5, delay = 0 }: TestimonialCardProps) => {
  return (
    <div 
      className="bg-card rounded-2xl p-6 shadow-card border border-border/50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-4 leading-relaxed">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-muted-foreground text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
