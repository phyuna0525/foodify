const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://211.237.50.150:7080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // '/api'를 제거하고 실제 경로를 사용합니다.
      },
    })
  );
};
