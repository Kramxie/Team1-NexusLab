import Link from "next/link";

interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

export default function PricingTier({
  name,
  price,
  period = "/month",
  description,
  features,
  highlighted = false,
  buttonText = "Get Started",
  buttonHref = "/contact",
}: PricingTierProps) {
  return (
    <div
      className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${
        highlighted
          ? "z-10"
          : "hover:z-10"
      }`}
    >
      {/* Animated gradient border */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
          highlighted 
            ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-100 animate-gradient-x" 
            : "bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 animate-gradient-x"
        }`} 
      />
      <div 
        className={`absolute rounded-2xl transition-all duration-300 ${
          highlighted 
            ? "inset-[2px] bg-gray-900/95" 
            : "inset-[1px] bg-gray-900/98 group-hover:inset-[2px]"
        }`} 
      />

      {/* Glowing orbs */}
      <div 
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-all duration-700 ${
          highlighted 
            ? "bg-cyan-500/30 opacity-100" 
            : "bg-cyan-500/20 opacity-0 group-hover:opacity-100 group-hover:scale-125"
        }`} 
      />
      <div 
        className={`absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl transition-all duration-700 delay-100 ${
          highlighted 
            ? "bg-purple-500/30 opacity-100" 
            : "bg-purple-500/20 opacity-0 group-hover:opacity-100 group-hover:scale-125"
        }`} 
      />

      {/* Scan line effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Floating particles for highlighted */}
      {highlighted && (
        <>
          <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 left-8 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
        </>
      )}

      {/* Most Popular Badge with glow */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 overflow-visible">
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-50 animate-pulse-glow" />
          <span className="relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg z-30">
            Most Popular
          </span>
        </div>
      )}

      {/* Corner tech accents */}
      <div className={`absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 rounded-tl-2xl transition-all duration-500 ${
        highlighted ? "border-cyan-500/50" : "border-transparent group-hover:border-cyan-500/50"
      }`} />
      <div className={`absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-500 ${
        highlighted ? "border-purple-500/50" : "border-transparent group-hover:border-purple-500/50"
      }`} />
      <div className={`absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 rounded-bl-2xl transition-all duration-500 ${
        highlighted ? "border-purple-500/50" : "border-transparent group-hover:border-purple-500/50"
      }`} />
      <div className={`absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 rounded-br-2xl transition-all duration-500 ${
        highlighted ? "border-cyan-500/50" : "border-transparent group-hover:border-cyan-500/50"
      }`} />

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={`text-lg font-semibold mb-2 transition-all duration-300 ${
            highlighted 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400" 
              : "text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400"
          }`}
        >
          {name}
        </h3>

        <div className="flex items-baseline gap-1 mb-4">
          <span className={`text-4xl font-bold transition-all duration-300 ${
            highlighted 
              ? "text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" 
              : "text-white group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          }`}>{price}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>

        <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-sm transition-all duration-300"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                  highlighted 
                    ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]" 
                    : "text-gray-500 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 30}ms` }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={buttonHref}
          className={`relative block text-center py-3 px-6 rounded-xl font-medium overflow-hidden transition-all duration-300 ${
            highlighted
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105"
              : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-cyan-500/50 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
          }`}
        >
          {/* Button shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative">{buttonText}</span>
        </Link>
      </div>
    </div>
  );
}
