var _ = require('lodash'),
    ss = require('simple-statistics')

module.exports = function(array, value) { 
  var normals = []
  var max = ss.max(array)
  _.each(array, function(val){
    normals.push((val / max) * value)
  })
  return normals
}
