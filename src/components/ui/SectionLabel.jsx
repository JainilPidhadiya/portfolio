import { cn } from '../../utils/cn';

/**
 * SectionLabel
 * 
 * Monospace technical indicator for section titles and status labels.
 * Examples: '01 / PROFILE', 'SYSTEM STATUS', 'FULL STACK', '2026.09'
 */
export function SectionLabel({
  children,
  label,
  indicator = null, // 'green' | 'cyan' | 'blue' | 'violet' | null
  className,
  as: Component = 'div',
  ...props
}) {
  const content = children || label;

  const indicatorColors = {
    green: {
      ping: 'bg-green/60',
      dot: 'bg-green',
    },
    cyan: {
      ping: 'bg-cyan/60',
      dot: 'bg-cyan',
    },
    blue: {
      ping: 'bg-blue/60',
      dot: 'bg-blue',
    },
    violet: {
      ping: 'bg-violet/60',
      dot: 'bg-violet',
    },
  };

  return (
    <Component
      className={cn(
        "inline-flex items-center gap-2.5",
        "font-mono text-xs font-medium tracking-[0.18em] uppercase",
        "text-text-secondary select-none",
        className
      )}
      {...props}
    >
      {indicator && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span 
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              indicatorColors[indicator]?.ping || 'bg-cyan/60'
            )} 
          />
          <span 
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              indicatorColors[indicator]?.dot || 'bg-cyan'
            )} 
          />
        </span>
      )}
      {content && <span>{content}</span>}
    </Component>
  );
}
