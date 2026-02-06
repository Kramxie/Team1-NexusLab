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
      className={`group relative p-6 rounded-3xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm hover:border-[#0066ff] transition-all duration-[400ms] hover:shadow-[0_25px_70px_rgba(0,102,255,0.5)] hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-5 hover:scale-[1.03] ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0066ff]/5 to-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {badge && (
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#0066ff]/10 text-[#0066ff] border border-[#0066ff]/20 mb-4">
            {badge}
          </span>
        )}

        {icon && (
          <div className="mb-4 text-3xl text-[#0066ff] group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#0066ff] transition-colors">
          {title}
        </h3>

        <p className="text-[#cccccc] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
