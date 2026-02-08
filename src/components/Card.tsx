interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  badge,
  className = "",
}: CardProps) {
  return (
    <div
      className={`group relative p-6 rounded-3xl border border-[rgba(0,102,255,0.2)] bg-nex-card backdrop-blur-sm hover:border-nex-primary transition-all duration-400 hover:shadow-[0_25px_70px_rgba(0,102,255,0.5)] hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-5 hover:scale-[1.03] ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-nex-primary/5 to-nex-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {badge && (
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-nex-primary/10 text-nex-primary border border-nex-primary/20 mb-4">
            {badge}
          </span>
        )}

        {icon && (
          <div className="mb-4 text-3xl text-nex-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-nex-primary transition-colors">
          {title}
        </h3>

        <p className="text-[#cccccc] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
