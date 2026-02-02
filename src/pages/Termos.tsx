import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import InternalHero from '@/components/layout/InternalHero';
import { FileText } from 'lucide-react';

const Termos = () => {
  return (
    <Layout>
      <Helmet>
        <title>Termos de Uso | DDM Locações</title>
        <meta name="description" content="Termos de uso do site DDM Locações. Condições gerais para utilização de nossos serviços de locação de retroescavadeira." />
        <link rel="canonical" href="https://ddmlocacoes.com.br/termos" />
        <meta property="og:title" content="Termos de Uso | DDM Locações" />
        <meta property="og:description" content="Condições gerais para locação de retroescavadeira." />
        <meta property="og:url" content="https://ddmlocacoes.com.br/termos" />
        <meta property="og:type" content="website" />
      </Helmet>

      <InternalHero
        badge="Legal"
        badgeIcon={FileText}
        title="Termos de"
        titleHighlight="Uso"
        breadcrumbs={[{ label: 'Termos de Uso' }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto prose prose-sm md:prose-base prose-invert prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            <p className="lead">
              Ao utilizar o site da DDM Locações, você concorda com os termos abaixo.
            </p>

            <h2>1. Serviços</h2>
            <p>
              A DDM Locações oferece serviços de locação de retroescavadeira com operador em Sete Lagoas e região. Os valores, prazos e condições específicas são definidos em cada orçamento individual.
            </p>

            <h2>2. Orçamentos</h2>
            <ul>
              <li>Os orçamentos são válidos por 7 dias, salvo indicação contrária</li>
              <li>Valores podem variar conforme tipo de serviço, local e condições do terreno</li>
              <li>Deslocamento pode ser cobrado conforme a distância</li>
            </ul>

            <h2>3. Contratação</h2>
            <p>A contratação é formalizada mediante:</p>
            <ul>
              <li>Aceite do orçamento enviado</li>
              <li>Definição de data e local do serviço</li>
              <li>Condições de pagamento acordadas</li>
            </ul>

            <h2>4. Responsabilidades</h2>
            <p><strong>Da DDM Locações:</strong></p>
            <ul>
              <li>Fornecer máquina em bom estado de funcionamento</li>
              <li>Disponibilizar operador qualificado</li>
              <li>Cumprir horários e prazos acordados</li>
            </ul>
            
            <p><strong>Do Cliente:</strong></p>
            <ul>
              <li>Garantir acesso adequado ao local do serviço</li>
              <li>Informar condições especiais do terreno</li>
              <li>Efetuar pagamento conforme acordado</li>
            </ul>

            <h2>5. Cancelamentos</h2>
            <p>
              Cancelamentos devem ser comunicados com antecedência mínima de 24 horas. Cancelamentos em cima da hora podem estar sujeitos a cobrança de taxa.
            </p>

            <h2>6. Condições Climáticas</h2>
            <p>
              Em caso de condições climáticas adversas que impossibilitem o trabalho seguro, o serviço será reagendado sem custo adicional.
            </p>

            <h2>7. Alterações</h2>
            <p>
              Estes termos podem ser atualizados a qualquer momento. Recomendamos consulta periódica.
            </p>

            <h2>8. Contato</h2>
            <p>
              Dúvidas? Entre em contato pelo WhatsApp: <strong>(31) 97106-7272</strong>.
            </p>

            <hr />

            <p className="text-sm">
              <em>Última atualização: Janeiro de 2025</em>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Termos;
