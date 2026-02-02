import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home, LucideIcon } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InternalHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const InternalHero = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs = [],
  children,
  className = '',
  size = 'md',
}: InternalHeroProps) => {
  const sizeClasses = {
    sm: 'pt-24 pb-6 md:pt-28 md:pb-8',
    md: 'pt-24 pb-8 md:pt-32 md:pb-12',
    lg: 'pt-28 pb-12 md:pt-36 md:pb-16',
  };

  return (
    <section className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
      
      <div className="container-ddm relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <Breadcrumb className="justify-center mb-4 animate-fade-in">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Home className="w-3.5 h-3.5" />
                      <span className="sr-only md:not-sr-only">Início</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                
                {breadcrumbs.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbSeparator />
                    {item.href ? (
                      <BreadcrumbLink asChild>
                        <Link to={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )}
          
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-fade-in">
              {BadgeIcon && <BadgeIcon className="w-4 h-4 text-primary" />}
              <span className="text-sm font-semibold text-primary">{badge}</span>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-3 animate-fade-in-up">
            {title}
            {titleHighlight && (
              <>
                {' '}
                <span className="text-gradient-vivid">{titleHighlight}</span>
              </>
            )}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto animate-fade-in-up stagger-1">
              {subtitle}
            </p>
          )}
          
          {/* Optional children */}
          {children && (
            <div className="mt-6 animate-fade-in-up stagger-2">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InternalHero;
