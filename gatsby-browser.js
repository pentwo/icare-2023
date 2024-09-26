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
