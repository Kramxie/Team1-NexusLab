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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {heading}
        </h3>
        {subheading && (
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            {subheading}
          </p>
        )}
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
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
