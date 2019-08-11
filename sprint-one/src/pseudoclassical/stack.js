var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // if any arguments are passed into the constructor, copy them to the new instance
  Array.from(arguments).forEach(arg => {
    this[arg] = arg;
  });
};

Stack.prototype.push = function(string) {
  // Add a string to the top of the stack
  // get the current size of the stack
  var length = this.size();

  // add the new string at the key of the current size of the stack
  this[length] = string;
};

Stack.prototype.pop = function() {
  // Remove and return the string on the top of the stack

  // get the current size of the stack
  var length = this.size();

  // if the stack is empty, return undefined;
  if (length === 0) {
    return undefined;
  } else {
    // create a variable that points to the top element on the stack
    var result = this[length - 1];

    // delete the top element from the stack
    delete this[length - 1];

    return result;
  }
};

Stack.prototype.size = function() {
  // calcuate and return the number of items on the stack
  return Object.keys(this).length;
};