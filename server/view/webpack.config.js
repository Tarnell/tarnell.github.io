const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Wedding website',
      template: './server/view/index.html',
    }),
  ],
  mode: 'development',
  entry: path.resolve(__dirname, './', 'index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: '[name]-[contenthash:8].js',
    // chunkFilename: '[name]-[contenthash:8].chunk.js',
    hotUpdateChunkFilename: '[id]-[hash].hot-update.js',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    clientLogLevel: 'silent',
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'cheap-module-source-map',
  performance: {
    hints: false,
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, './'),
        exclude: /node_modules/,
        resolve: {
          alias: {
            app: path.resolve(__dirname, './'),
          },
          extensions: ['.js', '.jsx', '.scss'],
        },
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: 'defaults',
              }],
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/transform-runtime'],
            ],
          },
        }, {
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.module\.[a-z]+$/,
        include: path.resolve(__dirname, './'),
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              esModule: true,
              modules: {
                localIdentName: '[name]__[local]___[contenthash:8]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
