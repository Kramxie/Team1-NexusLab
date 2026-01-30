"use client";

import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    // Prevent adding the script multiple times during route changes / HMR
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url="https://calendly.com/markatieh21/30min"
      style={{ minWidth: "320px", height: "630px" }}
    />
  );
}
