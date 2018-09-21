var path = require('path')

module.exports = function (raw, cb, compiler, filePath) {
  try {
    var babel = require('@babel/core')
    var babelOptions = require(path.resolve(process.cwd(), 'babel.config.js'))
    var options = Object.assign({
      comments: false,
      filename: filePath,
      sourceMaps: compiler.options.sourceMap // ? 'both' : false
    }, compiler.options.babel || babelOptions)
    var res = babel.transform(raw, options)
  } catch (err) {
    return cb(err)
  }
  cb(null, res)
}
