var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // find the key with the highest value
    var keys = Object.keys(storage);
    keys.sort((a, b) => a - b);
    var highestKey = keys[keys.length - 1];

    // if highestKey is undefined, set to 0
    // else, set to 1 greater than current highestKey
    highestKey = highestKey === undefined ? 0 : Number.parseInt(highestKey) + 1;

    // add key:value pair to storage
    storage[highestKey] = value;
  };

  someInstance.dequeue = function() {

    // find the key with the lowest value
    var keys = Object.keys(storage);
    keys.sort((a, b) => a - b);
    var lowestKey = keys[0];
    // remove and return the value at that key
    var copy = storage[lowestKey];
    delete storage[lowestKey];
    return copy;
  };

  someInstance.size = function() {
    // calculate the number of items in the queue
    var length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};
