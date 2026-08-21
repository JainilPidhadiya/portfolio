import { cn } from '../../utils/cn';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  asChild, 
  href, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold text-sm tracking-wide transition-all focus-ring px-8 py-4 rounded-full";
  
  const variants = {
    primary: "bg-accent-strong text-white hover:bg-accent-primary hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:-translate-y-0.5",
    secondary: "bg-surface-raised text-primary border border-border hover:border-accent-strong hover:bg-surface hover:text-accent-primary hover:-translate-y-0.5",
    ghost: "bg-transparent text-secondary border-transparent hover:text-primary hover:bg-surface-raised"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
