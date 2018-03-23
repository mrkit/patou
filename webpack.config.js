const r = require('path').resolve;

module.exports = {
  mode: 'production',
  entry: r(__dirname, 'client', 'public', 'react.jsx'),
  output: {
    filename: 'bundle.js',
    path: r(__dirname, 'client', 'public', 'js')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react', 'stage-2']
      }
    }]
  }
};