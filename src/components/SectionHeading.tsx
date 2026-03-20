import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: ReactNode;
  subtitle: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  inline?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'left',
  inline = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-2 ${alignmentClass} ${className}`.trim()}>
      {inline ? (
        <h2
          className={`font-serif text-[2.75rem] leading-[1.02] font-semibold tracking-[0.015em] text-zinc-100 sm:text-[3.55rem] md:text-[4.35rem] ${titleClassName}`.trim()}
        >
          {title} <span className={`${subtitleClassName}`.trim()}>{subtitle}</span>
        </h2>
      ) : (
        <>
          <h2
            className={`font-serif text-[2.9rem] leading-[0.98] font-semibold tracking-[0.015em] text-zinc-100 sm:text-[3.8rem] md:text-[4.8rem] ${titleClassName}`.trim()}
          >
            {title}
          </h2>
          <p
            className={`font-serif text-[1.95rem] leading-[1.02] font-medium italic tracking-[0.01em] text-red-300 sm:text-[2.35rem] md:text-[2.9rem] ${subtitleClassName}`.trim()}
          >
            {subtitle}
          </p>
        </>
      )}
      {description ? (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg ${descriptionClassName}`.trim()}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
