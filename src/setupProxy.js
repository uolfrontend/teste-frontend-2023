const { createProxyMiddleware } = require('http-proxy-middleware')

// Proxy para evitar problemas de CORS no ambiente de desenvolvimento (se a API não for corrigida)
module.exports = function (app) {
  if (process.env.REACT_APP_PROXY_API_ENABLED !== 'true') {
    return
  }

  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.PROXY_API_TARGET_URL,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      logLevel: 'debug',
      onProxyRes: (proxyRes, req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')
      }
    })
  )
  app.listen(process.env.PROXY_SERVER_PORT)
}
