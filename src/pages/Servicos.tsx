import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeaderCompact from '@/components/layout/PageHeaderCompact';
import { Button } from '@/components/ui/button';
import {
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

      <PageHeaderCompact
        title="Nossos Serviços"
        subtitle="Serviços completos de retroescavadeira com operador experiente e combustível inclusos"
        breadcrumbs={[{ label: 'Serviços' }]}
      />

      {/* Services List - Editorial Style */}
      <section className="py-6 md:py-10">
        <div className="container-ddm">
          <div className="space-y-4">
            {servicos.map((servico, index) => (
              <div
                key={servico.id}
                id={servico.id}
                className={`grid md:grid-cols-2 gap-4 md:gap-6 p-4 rounded-lg bg-card border border-border ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-48 md:h-auto rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={servico.imagem}
                    alt={`Serviço de ${servico.titulo} - DDM Locações`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <servico.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {servico.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {servico.descricao}
                  </p>

                  {/* Aplicações */}
                  <div className="space-y-1.5 mb-4">
                    {servico.aplicacoes.map((app) => (
                      <div key={app} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" asChild className="w-fit">
                    <Link to="/contato">
                      Solicitar orçamento
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-6 md:py-10 bg-muted/30 border-t border-border">
        <div className="container-ddm">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Pronto para começar sua obra?
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Solicite um orçamento gratuito agora mesmo. Respondemos em poucos minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="default" size="default" asChild>
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                </Link>
              </Button>
              <Button variant="outline" size="default" asChild>
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
