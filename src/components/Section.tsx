interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 section-divider-glow ${
        dark ? "bg-[#0a0a0a]" : "bg-black"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10 sm:mb-16">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 nex-title-gradient">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[#666] max-w-2xl mx-auto text-xs sm:text-sm uppercase tracking-wider font-medium">
                {subtitle}
              </p>
            )}
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent" />
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
