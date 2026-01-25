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
      className={`group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${className}`}
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Badge */}
        {badge && (
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            {badge}
          </span>
        )}

        {/* Icon */}
        {icon && (
          <div className="mb-4 text-3xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
