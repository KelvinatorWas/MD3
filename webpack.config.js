const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/login.ts', './src/styles.scss', './src/global.scss'],
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    client: {
      logging: 'none',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].css' },
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'favicon.png',
      chunks: ['login'],
  }),
  new HtmlWebpackPlugin({
    filename:"login.html",
    template: 'src/login.html',
    chunks: ['login'],
  }),
  new HtmlWebpackPlugin({
    filename:"contact-us.html",
    template: 'src/contact-us.html',
    chunks: ['login'],
  }),
  new HtmlWebpackPlugin({
    filename:"contact-us-2.html",
    template: 'src/contact-us-2.html',
    chunks: ['login'],
  }),
  new HtmlWebpackPlugin({
    filename:"checkout.html",
    template: 'src/checkout.html',
    chunks: ['login'],
  }),
  new CopyPlugin({
    patterns: [
      {
        from: 'src/assets',
        to: 'assets',
      },
    ],
  }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts.js',
  },
};
