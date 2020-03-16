const path = require('path')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'lib'),
    filename: 'dci3d-vue-cli.js'
  }
}