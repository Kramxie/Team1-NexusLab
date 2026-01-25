"use client";

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50">
      {/* 
        ============================================
        NEWSLETTER EMBED PLACEHOLDER
        ============================================
        Paste your Mailchimp, Brevo (Sendinblue), ConvertKit, 
        or other email marketing form embed code below.
        
        Example for Mailchimp:
        <div id="mc_embed_signup">
          <!-- Mailchimp form code here -->
        </div>
        
        Example for Brevo:
        <iframe src="your-brevo-form-url" ...></iframe>
        ============================================
      */}
      
      {/* Placeholder Form UI */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
