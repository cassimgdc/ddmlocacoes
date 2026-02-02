import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderCompactProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageHeaderCompact = ({
  title,
  subtitle,
  breadcrumbs = [],
}: PageHeaderCompactProps) => {
  return (
    <div className="pt-20 md:pt-24 pb-4 md:pb-6 border-b border-border bg-background">
      <div className="container-ddm">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only md:not-sr-only">Início</span>
            </Link>
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {item.href ? (
                  <Link to={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-foreground">
          {title}
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-muted-foreground text-sm mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeaderCompact;
