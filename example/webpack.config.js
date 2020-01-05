const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevMode = process.env.NODE_ENV === 'development'


module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: {
    example1: './example/example1/js/index.js',
    example2: './example/example2/js/index.js',
    example3: './example/example3/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../public/'),
    publicPath: '/',
    filename: '[name]/js/app.js',
  },
  devtool: isDevMode && 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', 
            options: {
              importLoaders: 1,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')({
                  stage: 0
                }),
              ]
            }
          },
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/css/app.css'
    }),
  ],
  
  devServer: {
    open: true,
    openPage: 'index.html',
    contentBase: path.resolve(__dirname, '../public/'),
    watchContentBase: true,
    port: 3000,
  }
}