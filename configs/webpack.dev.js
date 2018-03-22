import { DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import paths from './paths'
import devServer from './server.dev'

process.env.NODE_ENV = 'development';

export default {
  context: paths.src,
  entry: {
    app: './index'
  },
  output: {
    filename: '[name].js',
    path: paths.dist,
    publicPath: '/',
  },
  resolve: {
    modules: [
      paths.node_modules,
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: {
      src: paths.src,
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: paths.src,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      inject: false,
    }),
  ],
  stats: {
    assets: true,
    cached: true,
    errors: true,
    errorDetails: true,
    hash: true,
    timings: true,
    version: true,
    warnings: true,
  },
  devtool: 'inline-source-map',
  watch: false,
  devServer: {
    hot: true,
    port: devServer.port,
    inline: false,
    historyApiFallback: true,
    contentBase: paths.dist,
  },
}
