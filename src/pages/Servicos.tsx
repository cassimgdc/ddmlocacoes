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
      <section className="section-padding">
        <div className="container-ddm">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                className="rounded-xl bg-card border border-border overflow-hidden"
              >
                {/* Imagem */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={servico.imagem}
                    alt={`Serviço de ${servico.titulo} - DDM Locações`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                      <servico.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-4">
                  <h3 className="text-base font-medium text-foreground mb-1">
                    {servico.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {servico.descricao}
                  </p>

                  {/* Aplicações */}
                  <div className="space-y-1">
                    {servico.aplicacoes.slice(0, 3).map((app) => (
                      <div key={app} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-success flex-shrink-0" />
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
      <section className="section-padding bg-muted/50 border-y border-border">
        <div className="container-ddm">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Como funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { step: '1', title: 'Solicite orçamento', desc: 'Entre em contato pelo WhatsApp ou formulário. Resposta rápida!' },
              { step: '2', title: 'Agende o serviço', desc: 'Combinamos data, horário e local. Flexibilidade para atender você.' },
              { step: '3', title: 'Trabalho feito', desc: 'Chegamos com máquina e operador. Você só acompanha o resultado.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-5 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-medium text-foreground mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Pronto para começar sua obra?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Solicite um orçamento gratuito agora mesmo. Respondemos em poucos minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4" />
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
