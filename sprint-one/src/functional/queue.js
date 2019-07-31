var Queue = function() {
  var someInstance = {};
  var front = 0;
  var back = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[front] = value;
    front++
  };

  someInstance.dequeue = function() {
    if (front - back > 0) {
      var output = storage[back]
      delete storage[back]
      back++
    } else {
      size = 0
    }
    return output
  };

  someInstance.size = function() {
    return front - back;
  };

  return someInstance;
};
