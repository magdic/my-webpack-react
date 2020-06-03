const config = require('./webpack.config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const handlebarsHelpers = require('handlebars-helpers')
const assembleWebpack = require('assemble-webpack')

config.mode = 'production'

config.optimization = {
  splitChunks: {
    chunks: 'all'
  }
}

config.plugins = config.plugins.concat([
  new UglifyJsPlugin({
    sourceMap: true,
    extractComments: true
  }),
  new assembleWebpack.AttachedPlugin({
    helpers: [handlebarsHelpers(), './app/helpers/helpers.js']
  })
])

module.exports = config
