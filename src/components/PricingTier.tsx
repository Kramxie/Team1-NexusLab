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
      className={`relative p-8 rounded-2xl border transition-all duration-300 ${
        highlighted
          ? "border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-lg shadow-cyan-500/20"
          : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
      }`}
    >
      {/* Popular Badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Tier Name */}
      <h3
        className={`text-lg font-semibold mb-2 ${
          highlighted ? "text-cyan-400" : "text-gray-300"
        }`}
      >
        {name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-500 text-sm">{period}</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-cyan-400" : "text-gray-500"
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
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={buttonHref}
        className={`block text-center py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
          highlighted
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
