import Link from "next/link";

interface CTAProps {
  heading: string;
  subheading?: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({
  heading,
  subheading,
  buttonText,
  buttonHref,
}: CTAProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[rgba(0,102,255,0.2)]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#0066ff]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#00aaff]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 py-12 sm:px-12 sm:py-20 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h3>
        {subheading && (
          <p className="text-[#cccccc] text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {subheading}
          </p>
        )}
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white hover:shadow-[0_15px_40px_rgba(0,102,255,0.6)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
          {buttonText}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
