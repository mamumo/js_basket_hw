var basket = require('../basket');
var assert = require('chai').assert;

describe('Basket', function() {
  it( 'should be empty at 0', function() {
    assert.equal( 0, basket.contents)
  })

  it( 'should be full at 20', function() {
    basket.full();
    assert.equal( 20, basket.contents)
  })

  it( 'should go down by 5 when item removed', function(){
      basket.full()
      var startValue = basket.contents
      basket.remove()
      assert.equal(startValue - 5, basket.contents )
  })
})