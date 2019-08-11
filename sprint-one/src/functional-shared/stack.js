// // why is this causing a load timeout for modules error??
// var _;
// var value = require(['../../lib/underscore/underscore'], function(result) {
//   console.log('cb runs!');
//   alert('cb runs!');
//   debugger;
//   return _ = result;
// });


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push: function(value) {
    // get the number of items in the stack;
    var length = this.size();

    // add the new item
    this[length] = value;

  },
  pop: function() {
    // get the number of items in the stack;
    var length = this.size();

    // calculate the highest key index
    var highestKeyIndex = length === 0 ? 0 : length - 1;

    // make a copy of value at highestKeyIndex
    var copy = this[highestKeyIndex];

    // delete key:value pair from stack
    delete this[highestKeyIndex];
    return copy;
  },
  size: function() {
    // calculate & return the number of items in this stack that have keys like '1', '3', '7', etc...
    var keys = Object.keys(this);
    keys = keys.filter(key => {
      var value = Number.parseInt(key);
      if (!Number.isNaN(value) && typeof value === 'number') {
        return true;
      } else {
        return false;
      }
    });
    return keys.length;
  }
};

// extend function
var extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};
