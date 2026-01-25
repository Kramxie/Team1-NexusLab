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
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        dark ? "bg-gray-900" : "bg-gray-950"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                {subtitle}
              </p>
            )}
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
