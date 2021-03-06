const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')

module.exports = {
  runtimeCompiler: true,
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Ubuntu', variants: ['300', '400'] }
        ]
      })
    ]
  }
}
