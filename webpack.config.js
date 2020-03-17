const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'dci3d-vue-cli.js',
    library: 'dci3d-vue-cli',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
  ]
}