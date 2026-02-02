import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import InternalHero from '@/components/layout/InternalHero';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  ArrowRight,
  MessageCircle,
  Shovel,
  Mountain,
  Trees,
  Construction,
  Truck,
  Tractor,
  CheckCircle2,
} from 'lucide-react';

// Imagens dos serviços
import aberturaValas from '@/assets/servicos/abertura-valas.png';
import terraplanagem from '@/assets/servicos/terraplanagem.png';
import limpezaLotes from '@/assets/servicos/limpeza-lotes.png';
import escavacao from '@/assets/servicos/escavacao.png';
import carregamento from '@/assets/servicos/carregamento.png';
import servicosRurais from '@/assets/servicos/servicos-rurais.png';

const servicos = [
  {
    id: 'abertura-valas',
    titulo: 'Abertura de Valas',
    descricao: 'Valas para tubulação de água, esgoto, rede elétrica e drenagem. Trabalho preciso com profundidade controlada.',
    icon: Shovel,
    imagem: aberturaValas,
    aplicacoes: ['Rede de esgoto', 'Tubulação de água', 'Passagem de cabos', 'Sistema de drenagem'],
  },
  {
    id: 'terraplanagem',
    titulo: 'Terraplanagem',
    descricao: 'Nivelamento e preparação de terrenos para construção. Ideal para obras residenciais e comerciais.',
    icon: Mountain,
    imagem: terraplanagem,
    aplicacoes: ['Preparação para construção', 'Nivelamento de lotes', 'Acerto de terreno', 'Base para pavimentação'],
  },
  {
    id: 'limpeza-lotes',
    titulo: 'Limpeza de Lotes',
    descricao: 'Remoção de entulhos, vegetação e resíduos. Deixamos o terreno pronto para iniciar sua obra.',
    icon: Trees,
    imagem: limpezaLotes,
    aplicacoes: ['Remoção de entulho', 'Limpeza de vegetação', 'Preparação de área', 'Destocamento'],
  },
  {
    id: 'escavacao',
    titulo: 'Escavação',
    descricao: 'Escavação para fundações, fossas, cisternas e piscinas. Precisão e segurança em cada trabalho.',
    icon: Construction,
    imagem: escavacao,
    aplicacoes: ['Fundações', 'Fossas sépticas', 'Cisternas', 'Piscinas'],
  },
  {
    id: 'carregamento',
    titulo: 'Carregamento',
    descricao: 'Carregamento de terra, areia, brita e materiais diversos em caminhões. Agilidade no canteiro.',
    icon: Truck,
    imagem: carregamento,
    aplicacoes: ['Terra e aterro', 'Areia e brita', 'Entulho', 'Materiais diversos'],
  },
  {
    id: 'servicos-rurais',
    titulo: 'Serviços Rurais',
    descricao: 'Atendimento em propriedades rurais: açudes, estradas, curvas de nível e preparação de solo.',
    icon: Tractor,
    imagem: servicosRurais,
    aplicacoes: ['Construção de açudes', 'Manutenção de estradas', 'Curvas de nível', 'Preparação de solo'],
  },
];

const Servicos = () => {
  return (
    <Layout>
      <Helmet>
        <title>Serviços de Retroescavadeira | DDM Locações - Sete Lagoas</title>
        <meta name="description" content="Serviços completos de retroescavadeira: abertura de valas, terraplanagem, limpeza de lotes, escavação e muito mais. Operador experiente incluso. Sete Lagoas e região." />
        <link rel="canonical" href="https://ddmlocacoes.com.br/servicos" />
        <meta property="og:title" content="Serviços de Retroescavadeira | DDM Locações" />
        <meta property="og:description" content="Terraplanagem, valas, limpeza de lotes e mais. Operador incluso." />
        <meta property="og:url" content="https://ddmlocacoes.com.br/servicos" />
        <meta property="og:image" content="https://ddmlocacoes.com.br/og-image.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <InternalHero
        badge="Serviços"
        badgeIcon={Wrench}
        title="O que fazemos por"
        titleHighlight="você"
        subtitle="Serviços completos de retroescavadeira para sua obra. Operador experiente e combustível inclusos em todos os trabalhos."
        breadcrumbs={[{ label: 'Serviços' }]}
      />

      {/* Grid de Serviços */}
      <section className="py-12 md:py-20">
        <div className="container-ddm">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, index) => (
              <div
                key={servico.id}
                className="group rounded-2xl bg-card border border-border/50 overflow-hidden card-hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Imagem */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={servico.imagem}
                    alt={`Serviço de ${servico.titulo} - DDM Locações`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={176}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <servico.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {servico.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {servico.descricao}
                  </p>

                  {/* Aplicações */}
                  <div className="space-y-1.5">
                    {servico.aplicacoes.slice(0, 3).map((app) => (
                      <div key={app} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-ddm-success flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Como <span className="text-gradient-vivid">funciona</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Solicite orçamento', desc: 'Entre em contato pelo WhatsApp ou formulário. Resposta rápida!' },
              { step: '2', title: 'Agende o serviço', desc: 'Combinamos data, horário e local. Flexibilidade para atender você.' },
              { step: '3', title: 'Trabalho feito', desc: 'Chegamos com máquina e operador. Você só acompanha o resultado.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Pronto para começar sua <span className="text-gradient-vivid">obra</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              Solicite um orçamento gratuito agora mesmo. Respondemos em poucos minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild className="group">
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5" />
                  Pedir Orçamento Grátis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/catalogo">
                  Ver Equipamentos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
