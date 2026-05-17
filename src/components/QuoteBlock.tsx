type QuoteBlockProps = {
  quote: string;
  variant?: 'default' | 'accent' | 'closing';
};

export function QuoteBlock({ quote, variant = 'default' }: QuoteBlockProps) {
  return (
    <blockquote className={`quote-block quote-block--${variant}`}>
      <p>{quote}</p>
    </blockquote>
  );
}
