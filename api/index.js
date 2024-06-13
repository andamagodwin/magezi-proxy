const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://magezi.ac.ug',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // remove /api prefix
    },
  });
  proxy(req, res);
};
