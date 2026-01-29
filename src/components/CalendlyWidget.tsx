import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 text-center mb-4">
        Select a Day
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Set a Google meeting appointment with us!
      </p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/markatieh21/30min"
        style={{ minWidth: "320px", height: "630px" }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;