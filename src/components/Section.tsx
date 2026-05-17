import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${dark ? 'section--alt' : ''} ${className}`.trim()}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container section-header">
        <h2 id={`${id}-heading`} className="section-title">
          {title}
        </h2>
        {subtitle && <p className="section-subtitle document-text">{subtitle}</p>}
      </div>
      <div className="container section-body">{children}</div>
    </section>
  );
}
