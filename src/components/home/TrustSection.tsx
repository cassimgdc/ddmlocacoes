import { MapPin, ShieldCheck, Wrench, FileText, Headphones } from 'lucide-react';

const cities = [
  'Sete Lagoas',
  'Prudente de Morais',
  'Matozinhos',
  'Pedro Leopoldo',
  'Lagoa Santa',
  'Capim Branco',
  'Paraopeba',
  'Caetanópolis',
  'Inhaúma',
  'Santana de Pirapama',
];

const commitments = [
  {
    icon: Wrench,
    title: 'Manutenção em dia',
    description: 'Todos os equipamentos passam por revisão preventiva regular.',
  },
  {
    icon: Headphones,
    title: 'Suporte durante a obra',
    description: 'Acompanhamento e assistência sempre que precisar.',
  },
  {
    icon: FileText,
    title: 'Contrato transparente',
    description: 'Termos claros, sem surpresas no final do serviço.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança garantida',
    description: 'Equipamentos segurados e operadores treinados.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
      <div className="container-ddm">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Area Coverage */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-copper" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">Área atendida</h3>
                <p className="text-sm text-muted-foreground">Sete Lagoas e região</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span 
                  key={city} 
                  className="px-3 py-1.5 text-sm rounded-lg bg-muted text-foreground border border-border"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Atendemos toda a região metropolitana. Outras cidades sob consulta.
            </p>
          </div>

          {/* Card 2 - DDM Commitment */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-copper" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">Compromisso DDM</h3>
                <p className="text-sm text-muted-foreground">Qualidade e confiança</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {commitments.map((item) => (
                <div key={item.title} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-copper" />
                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
