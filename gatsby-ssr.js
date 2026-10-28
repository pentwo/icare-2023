const React = require("react");
const { renderToString } = require("react-dom/server");
const { createStylesServer, ServerStyles } = require("@mantine/ssr");
const { Helmet } = require("react-helmet");

const stylesServer = createStylesServer();

// Mantine styles and react-helmet head tags are both collected here.
// Helmet.renderStatic() must run synchronously right after renderToString:
// Gatsby renders pages concurrently, and helmet keeps global state, so reading
// it later (e.g. in onRenderBody) picks up another page's tags.
exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
  setHtmlAttributes,
}) => {
  const html = renderToString(bodyComponent);
  const helmet = Helmet.renderStatic();

  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.script.toComponent(),
    React.createElement(ServerStyles, {
      html,
      server: stylesServer,
      key: "mantine-styles",
    }),
  ]);
  replaceBodyHTMLString(html);
};
