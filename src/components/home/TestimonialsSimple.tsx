import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    location: 'Sete Lagoas',
    text: 'Excelente serviço! A retroescavadeira chegou no horário e o operador foi muito profissional.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    location: 'Prudente de Morais',
    text: 'Contratei para limpar meu lote e ficou perfeito. Preço justo e atendimento nota 10.',
    rating: 5,
  },
  {
    name: 'João Oliveira',
    location: 'Capim Branco',
    text: 'Já é a terceira vez que alugo com a DDM. Sempre confiável e pontual.',
    rating: 5,
  },
];

const TestimonialsSimple = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">O que dizem nossos clientes</h2>
      
      <div className="grid md:grid-cols-3 gap-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-card border border-border"
          >
            {/* Rating */}
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < item.rating ? 'fill-accent text-accent' : 'text-muted'}`}
                />
              ))}
            </div>
            
            {/* Quote */}
            <p className="text-sm text-foreground mb-3">"{item.text}"</p>
            
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <span className="text-accent font-medium text-xs">{item.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSimple;
