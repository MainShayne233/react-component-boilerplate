const path = require('path')
const webpack = require('webpack')
const publicPath = 'http://localhost:4000/'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const env = process.env.MIX_ENV || 'dev'
const prod = env === 'prod'

const appEntry = path.join(__dirname, 'src', 'main.js')

const DEV_ENTRIES = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:4000',
  'webpack/hot/only-dev-server',
]

var plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    __PROD: prod,
    __DEV: env === 'dev',
  }),
  new WriteFilePlugin(),
]

if (!prod) plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = {
  devtool: prod ? false : 'cheap-module-eval-source-map',
  entry: {
    app: prod ? appEntry : DEV_ENTRIES.concat([appEntry]),
  },
  output: {
    path:  path.join(__dirname, 'lib'),
    filename: '[name].bundle.js',
    publicPath: publicPath,
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      'src',
    ],
    extensions: ['*', '.js', '.jsx'],
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    overlay: true,
    port: 4000,
    //historyApiFallback: true,
    historyApiFallback: { index: 'src/index.html' },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
}
