exports.onRouteUpdate = ({ location }) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: {
        path: location.pathname,
        title: document.title,
      },
    });
  }
};

exports.onClientEntry = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-784873740");

    // Load the gtag.js script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-784873740";
    script.async = true;
    document.head.appendChild(script);
  }
};
