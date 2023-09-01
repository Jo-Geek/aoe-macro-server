const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/execute',
    createProxyMiddleware({
      target: 'http://localhost:8045',
      changeOrigin: true,
    })
  );
};
