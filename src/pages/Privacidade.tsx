import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeaderCompact from '@/components/layout/PageHeaderCompact';

const Privacidade = () => {
  return (
    <Layout>
      <Helmet>
        <title>Política de Privacidade | DDM Locações</title>
        <meta name="description" content="Política de privacidade da DDM Locações. Saiba como tratamos seus dados pessoais e protegemos sua privacidade." />
        <link rel="canonical" href="https://ddmlocacoes.com.br/privacidade" />
        <meta property="og:title" content="Política de Privacidade | DDM Locações" />
        <meta property="og:description" content="Saiba como tratamos seus dados pessoais." />
        <meta property="og:url" content="https://ddmlocacoes.com.br/privacidade" />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHeaderCompact
        title="Política de Privacidade"
        breadcrumbs={[{ label: 'Política de Privacidade' }]}
      />

      <section className="py-6 md:py-10">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto prose prose-sm prose-invert prose-headings:text-foreground prose-headings:font-semibold prose-headings:text-base prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-li:text-sm">
            
            <p className="text-sm text-muted-foreground">
              A DDM Locações valoriza a privacidade de seus clientes. Esta política explica como coletamos, usamos e protegemos suas informações.
            </p>

            <h2 className="mt-6">1. Dados Coletados</h2>
            <p>Coletamos apenas informações necessárias para atendê-lo:</p>
            <ul className="text-sm">
              <li><strong>Dados de contato:</strong> nome, telefone, e-mail</li>
              <li><strong>Dados do serviço:</strong> local da obra, tipo de serviço solicitado</li>
              <li><strong>Dados técnicos:</strong> informações do navegador para melhorar o site</li>
            </ul>

            <h2>2. Uso dos Dados</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="text-sm">
              <li>Responder suas solicitações de orçamento</li>
              <li>Entrar em contato sobre os serviços</li>
              <li>Melhorar nosso atendimento</li>
            </ul>

            <h2>3. Compartilhamento</h2>
            <p>
              <strong>Não vendemos nem compartilhamos</strong> seus dados pessoais com terceiros para fins comerciais. Seus dados são utilizados exclusivamente para atendimento.
            </p>

            <h2>4. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
            </p>

            <h2>5. Seus Direitos</h2>
            <p>Você pode solicitar a qualquer momento:</p>
            <ul className="text-sm">
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de informações incorretas</li>
              <li>Exclusão dos seus dados</li>
            </ul>

            <h2>6. Contato</h2>
            <p>
              Dúvidas sobre esta política? Entre em contato pelo WhatsApp: <strong>(31) 97106-7272</strong>.
            </p>

            <hr className="border-border" />

            <p className="text-xs text-muted-foreground">
              <em>Última atualização: Janeiro de 2025</em>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacidade;
