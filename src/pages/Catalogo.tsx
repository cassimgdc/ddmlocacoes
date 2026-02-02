import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import InternalHero from '@/components/layout/InternalHero';
import { Button } from '@/components/ui/button';
import {
  Tractor,
  ArrowRight,
  CheckCircle2,
  Fuel,
  User,
  Clock,
  MessageCircle,
} from 'lucide-react';
import case580m from '@/assets/case-580m.png';

const equipamentos = [
  {
    slug: 'retroescavadeira-case-580m',
    nome: 'Retroescavadeira Case 580M',
    categoria: 'Retroescavadeira',
    imagem: case580m,
    descricao: 'Máquina versátil para escavação, terraplanagem e carregamento. Ideal para obras residenciais e comerciais.',
    destaques: [
      'Operador experiente incluso',
      'Combustível incluso',
      'Manutenção em dia',
    ],
    disponivel: true,
    precoHora: 'R$ 200',
  },
];

const Catalogo = () => {
  return (
    <Layout>
      <Helmet>
        <title>Catálogo de Equipamentos | DDM Locações - Sete Lagoas</title>
        <meta name="description" content="Confira nosso catálogo de máquinas para locação. Retroescavadeira Case 580M com operador incluso. Aluguel por hora ou diária em Sete Lagoas e região." />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/catalogo" />
        <meta property="og:title" content="Catálogo de Equipamentos | DDM Locações" />
        <meta property="og:description" content="Máquinas para locação com operador incluso em Sete Lagoas." />
      </Helmet>

      <InternalHero
        badge="Catálogo"
        badgeIcon={Tractor}
        title="Nossos"
        titleHighlight="Equipamentos"
        subtitle="Máquinas revisadas e prontas para trabalhar. Todos os aluguéis incluem operador experiente e combustível."
        breadcrumbs={[{ label: 'Catálogo' }]}
      />

      {/* Grid de Equipamentos */}
      <section className="py-12 md:py-20">
        <div className="container-ddm">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipamentos.map((equip) => (
              <div
                key={equip.slug}
                className="group relative rounded-2xl bg-card border border-border/50 overflow-hidden card-hover-lift"
              >
                {/* Badge disponível */}
                {equip.disponivel && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-ddm-success/20 text-ddm-success text-xs font-semibold">
                      Disponível
                    </span>
                  </div>
                )}

                {/* Imagem */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-secondary/50 to-muted/30 flex items-center justify-center p-6">
                  <img
                    src={equip.imagem}
                    alt={equip.nome}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-5 md:p-6">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {equip.categoria}
                  </span>
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground mt-1 mb-2">
                    {equip.nome}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {equip.descricao}
                  </p>

                  {/* Destaques */}
                  <ul className="space-y-1.5 mb-5">
                    {equip.destaques.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-ddm-success flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Preço e CTA */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">A partir de</p>
                      <p className="text-lg font-bold text-gradient-vivid">
                        {equip.precoHora}
                        <span className="text-sm font-normal text-muted-foreground">/hora</span>
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild className="group/btn">
                      <Link to={`/catalogo/${equip.slug}`}>
                        Ver Detalhes
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Card placeholder - Em breve */}
            <div className="rounded-2xl bg-muted/20 border border-dashed border-border/50 p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center mb-4">
                <Tractor className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <h3 className="text-lg font-display font-bold text-muted-foreground mb-2">
                Novos Equipamentos
              </h3>
              <p className="text-sm text-muted-foreground/70">
                Em breve, mais máquinas para atender sua obra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incluso no aluguel */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              O que está <span className="text-gradient-vivid">incluso</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              { icon: User, label: 'Operador experiente' },
              { icon: Fuel, label: 'Combustível' },
              { icon: Clock, label: 'Mínimo 2h' },
              { icon: CheckCircle2, label: 'Máquina revisada' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-card border border-border/50 text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
              Precisa de um orçamento?
            </h2>
            <Button variant="cta" size="lg" asChild className="group">
              <Link to="/contato">
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalogo;
