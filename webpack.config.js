const path = require('path')

module.export = {
  context: __dirname,
  entry: './frontend/slackrails.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['*', '.jsx', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  devtool: 'source-maps'
};