module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:12345',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }

      }
    }
  }
}