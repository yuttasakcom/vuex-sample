import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webapck from 'webpack'

const resolve = dir => path.resolve(__dirname, dir)

const config = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.common.js',
      '@': resolve('src')
    },
    extensions: ['.js', '.vue']
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html')
    }),
    new webapck.HotModuleReplacementPlugin()
  ]
}

export default config
