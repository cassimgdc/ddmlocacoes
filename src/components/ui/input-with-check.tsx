import * as React from 'react';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputWithCheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  hasError?: boolean;
}

const InputWithCheck = React.forwardRef<HTMLInputElement, InputWithCheckProps>(
  ({ isValid, hasError, className, ...props }, ref) => {
    return (
      <div className="relative">
        <Input
          ref={ref}
          className={cn(
            className,
            hasError && 'border-destructive focus:border-destructive',
            isValid && 'border-green-500/50 pr-10'
          )}
          {...props}
        />
        {isValid && (
          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
        )}
      </div>
    );
  }
);

InputWithCheck.displayName = 'InputWithCheck';

export { InputWithCheck };
