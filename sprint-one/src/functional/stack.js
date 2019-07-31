var Stack = function() {
  var someInstance = {};
  var count = 0

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var output = storage[count]
    delete storage[count]
    count--
    return output
  };

  someInstance.size = function() {
    if (count > 0) {
      return count
    } else {
      return 0
    }
  };

  return someInstance;
};