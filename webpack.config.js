const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: path.resolve(srcPath, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  devServer: {
    hot: true,
    port: 8080,
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: distPath,
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src'),
          globOptions: {
            ignore: ['**/*.js']
          }
        }
      ]
    })
  ]
}
