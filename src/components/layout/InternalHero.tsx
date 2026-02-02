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

interface PageHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  className?: string;
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
}: PageHeaderProps) => {
  return (
    <section className={`pt-20 pb-6 md:pt-24 md:pb-8 bg-card border-b border-border ${className}`}>
      <div className="container-ddm">
        <div className="max-w-2xl">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <Breadcrumb className="mb-3">
              <BreadcrumbList className="text-xs">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                      <Home className="w-3 h-3" />
                      <span className="sr-only md:not-sr-only">Início</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                
                {breadcrumbs.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbSeparator />
                    {item.href ? (
                      <BreadcrumbLink asChild>
                        <Link to={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="text-foreground">{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )}
          
          {/* Badge */}
          {badge && (
            <div className="badge-subtle mb-3">
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-copper" />}
              <span>{badge}</span>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            {title}
            {titleHighlight && (
              <>
                {' '}
                <span className="text-copper">{titleHighlight}</span>
              </>
            )}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-muted-foreground text-sm md:text-base">
              {subtitle}
            </p>
          )}
          
          {/* Optional children */}
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InternalHero;
