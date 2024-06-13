const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy middleware configuration
const proxy = createProxyMiddleware({
  target: 'https://magezi.ac.ug',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api prefix
  },
});

// Apply the proxy middleware to the route /api
app.use('/api', proxy);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
