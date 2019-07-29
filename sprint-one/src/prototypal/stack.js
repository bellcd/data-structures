var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);

  return stack;
};

var stackMethods = {
  push: function(string) {
    // Add a string to the top of the stack

    // get the current size of the stack
    var length = this.size();

    // add new item at next key index
    this[length] = string;
  },
  pop: function() {
    // Remove and return the string on the top of the stack

    // get the current size of the stack
    var length = this.size();

    // if stack is empty, return undefined
    if (Object.keys(this).length === 0) {
      return undefined;
    } else {
      // create a new reference to the element at the top of the stack
      var result = this[length - 1];

      // remove the element at the top of the stack
      delete this[length - 1];

      return result;
    }
  },
  size: function() {
    // Return the number of items on the stack
    // calculate the number of items in the stack
    var keys = Object.keys(this);

    // return that number
    return keys.length;
  }
};