const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name]-[contenthash:8].js',
    // chunkFilename: '[name]-[contenthash:8].chunk.js',
    hotUpdateChunkFilename: '[id]-[hash].hot-update.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
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
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        resolve: {
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
          },
        }, {
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        }],
      },
      {
        test: /\.module\.[a-z]+$/,
        include: path.resolve(__dirname, 'src'),
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
