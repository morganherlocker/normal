var should = require('should'),
    normal = require('../index')

describe('normal', function(){
  it('should normalize an array', function(){
    var t = [1,34,455,564,4,435,23,555,23]
    var n = normal(t, 100)
    n.should.be.ok
  })
})
