var webpack = require("webpack");
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin')

if (global.Promise == null) {
  global.Promise = require('es6-promise')
}

module.exports = {
  displayErrorDetails: true,
  context: __dirname + '/sources',
  entry: {
    app: './app.js',
    vendor: ['webpack/hot/dev-server']
  },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/dist/',
    pathinfo: true
  },
  devServer: {
    contentBase: "/dist",
    hot: true,
    lazy: false,
    inline: true
  },
  resolve: {
    extensions: ['.js', ''],
    modulesDirectories: [
      'node_modules',
      'sources'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules')
      },
      { test: /\.(png|gif|svg)$/, loader: 'file-loader?name=[path][name].[ext]' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      yr: 'yr',
      _: 'underscore',
      moment: 'moment',
    }),
    // new BrowserSyncPlugin(
    //     { open: false, port: 3000, proxy: 'https://localhost:9090/' },
    //     { reload: false }
    // ),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",

      filename: "vendor.js",
      // (Give the chunk a different name)

      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),
    new AssetsPlugin()
  ],
  stats: { children: false }
};
