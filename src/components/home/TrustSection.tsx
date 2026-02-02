import { MapPin, ShieldCheck, Wrench, FileText, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

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
    description: 'Revisão preventiva regular em todos os equipamentos.',
  },
  {
    icon: Headphones,
    title: 'Suporte na obra',
    description: 'Acompanhamento e assistência quando precisar.',
  },
  {
    icon: FileText,
    title: 'Contrato transparente',
    description: 'Termos claros, sem surpresas no final.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança garantida',
    description: 'Equipamentos segurados e operadores treinados.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30 border-y border-border/60">
      <div className="container-ddm">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Area Coverage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-copper/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-copper" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Área de Atendimento</h3>
                <p className="text-sm text-muted-foreground">Sete Lagoas e região metropolitana</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span 
                  key={city} 
                  className="px-3 py-1.5 text-sm rounded-lg bg-muted/80 text-foreground border border-border/60 hover:border-copper/30 transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-5 pt-4 border-t border-border/60">
              Outras cidades da região sob consulta. Entre em contato para verificar disponibilidade.
            </p>
          </motion.div>

          {/* Card 2 - DDM Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Compromisso DDM</h3>
                <p className="text-sm text-muted-foreground">Qualidade e confiança em cada serviço</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {commitments.map((item) => (
                <div key={item.title} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-copper" />
                    <span className="text-sm font-semibold text-foreground">{item.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;