const path = require('path');

module.exports = {
  entry: './test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),   // dist = distributable
    filename: 'main.bundle.js'
  }
};