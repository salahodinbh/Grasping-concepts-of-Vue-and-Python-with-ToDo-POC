module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        pathRewrite: { "/api": "^/api" },
        changeOrigin: true,
        logLevel: 'debug'
      },
    },
  },
};
