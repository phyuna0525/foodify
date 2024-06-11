const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://211.237.50.150:7080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
