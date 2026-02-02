interface ClientLogosProps {
  className?: string;
}

const ClientLogos = ({ className = '' }: ClientLogosProps) => {
  // Placeholder logos - can be replaced with real client logos
  const logos = [
    { name: 'Empresa 1', initials: 'E1' },
    { name: 'Empresa 2', initials: 'E2' },
    { name: 'Empresa 3', initials: 'E3' },
    { name: 'Empresa 4', initials: 'E4' },
    { name: 'Empresa 5', initials: 'E5' },
  ];

  return (
    <div className={`${className}`}>
      <p className="text-center text-sm text-muted-foreground mb-6">
        Empresas e parceiros que confiam no nosso trabalho
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {logos.map((logo, index) => (
          <div 
            key={logo.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground font-bold text-lg opacity-60 hover:opacity-100 transition-opacity"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {logo.initials}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
