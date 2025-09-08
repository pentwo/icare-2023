exports.onClientEntry = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    // Google Analytics 4 configuration
    gtag("config", "G-2QHEJNHMRJ");

    // Google Ads configuration (existing)
    gtag("config", "AW-784873740");

    // Add conversion tracking
    gtag("event", "conversion", {
      send_to: "AW-784873740/Qm5fCO_q19gBEIzyoPYC",
    });

    // Load the gtag.js script - this script can handle multiple tracking IDs
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js";
    script.async = true;
    document.head.appendChild(script);
  }
};
