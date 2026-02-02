import { MapPin, Clock, Phone } from 'lucide-react';

const AreaCoverageCard = () => {
  const cities = [
    'Sete Lagoas',
    'Prudente de Morais',
    'Capim Branco',
    'Funilândia',
    'Jequitibá',
    'Paraopeba',
    'Caetanópolis',
    'Baldim',
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Area */}
      <div className="p-4 rounded-lg bg-card border border-border">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-accent" />
          </div>
          <h3 className="font-medium text-foreground">Área de Atendimento</h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cities.map((city) => (
            <span
              key={city}
              className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
            >
              {city}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Outras cidades sob consulta
        </p>
      </div>

      {/* Response time */}
      <div className="p-4 rounded-lg bg-card border border-border">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
            <Clock className="w-4 h-4 text-success" />
          </div>
          <h3 className="font-medium text-foreground">Tempo de Resposta</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">WhatsApp</span>
            <span className="font-medium text-foreground">Até 15 min</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Orçamento</span>
            <span className="font-medium text-foreground">Até 2 horas</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Agendamento</span>
            <span className="font-medium text-foreground">Mesmo dia*</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          *Sujeito à disponibilidade
        </p>
      </div>
    </div>
  );
};

export default AreaCoverageCard;
