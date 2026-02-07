"use client";

import { useEffect, useRef } from "react";

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget?: (opts: { url: string; parentElement: HTMLElement }) => void;
  };
};

export default function CalendlyWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);
  const dataUrl = "https://calendly.com/justinjavonitalla/nexxus-lab";

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";

    const initWidget = () => {
      const win = window as CalendlyWindow;

      if (!containerRef.current) return;
      if (initializedRef.current) return; // ✅ prevent double-init
      if (!win.Calendly?.initInlineWidget) return;

      // ✅ reset DOM to avoid duplicates
      containerRef.current.innerHTML = "";

      win.Calendly.initInlineWidget({
        url: dataUrl,
        parentElement: containerRef.current,
      });

      initializedRef.current = true;
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`
    );

    if (existingScript) {
      // Script already loaded or loading
      // If already loaded, init right away
      if ((window as CalendlyWindow).Calendly?.initInlineWidget) {
        initWidget();
      } else {
        // If still loading, wait for it
        existingScript.addEventListener("load", initWidget, { once: true });
      }
    } else {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.addEventListener("load", initWidget, { once: true });
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup on unmount (optional)
      initializedRef.current = false;
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ minWidth: "320px", height: "630px" }}
    />
  );
}
