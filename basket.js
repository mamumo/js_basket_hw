var basket = {
  contents: 0,
  full: function() {
    this.contents = 20;
  },
  remove: function(){
    if( this.contents < 5 ) {
      var itemsLeft = this.contents
      this.volume = 0;
      return itemsLeft;
    }

    this.volume -= 5;
  }
}

module.exports = basket;