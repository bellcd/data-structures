var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add a string to the top of the stack

    // get the size of the stack
    var length = Object.keys(storage).length;

    // add length: value property on the storage object
    storage[length] = value;
  };

  someInstance.pop = function() {
    // remove and return the string on the top of the stack

    // get the size of the stack
    var length = Object.keys(storage).length;

    // copy the string on the top of the stack to another variable
    var topOfStack = storage[length];

    // delete that key:value pair from the storage object
    delete storage[length];

    // return the string
    return topOfStack;

  };

  someInstance.size = function() {
    // return the number of items on the stack

    // calculate and return the number of items in the stack
    return Object.keys(storage).length;
  };

  return someInstance;
};
