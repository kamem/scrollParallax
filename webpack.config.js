const webpack = require('webpack')
const path = require('path')
const package = require('./package.json')

const TerserPlugin = require('terser-webpack-plugin')
const isDevMode = process.env.NODE_ENV === 'development'


module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: {
    'dist/jquery.scrollParallax': './src/js/jquery.index.js',
    'dist/jquery.scrollParallax.min': './src/js/jquery.index.js',
    'jquery': './src/js/jquery.index.js',
    'vue': './src/js/vue.index.js',
  },
  output: {
    path: path.join(__dirname, '/'),
    publicPath: '/',
    filename: '[name].js',
    library: "scrollParallax",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `${package.name}
${package.description}
${package.repository.url}
@version ${package.version}
@license Released under ${package.license} license
@author ${package.author.name}`,
      test: /^(?=.*js)(?!.*min).*$/
    }),
    new webpack.BannerPlugin({
      banner: `${package.name}|${package.repository.url}|${package.version}|${package.license} license|${package.author.name}`,
      test: /\.min.js(\?.*)?$/i
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        test: /\.min.js(\?.*)?$/i,
      }),
    ],
  },
}