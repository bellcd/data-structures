var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // if any arguments are pased to the constructor, copy them to the new instance
  Array.from(arguments).forEach(arg => {
    this[arg] = arg;
  });
};

Queue.prototype.enqueue = function(string) {
  // Add a string to the back of the queue

  // create variable for back of queue index key
  var nextIndexKey;

  // if queue is empty, next index key is 0
  if (Object.keys(this).length === 0) {
    nextIndexKey = 0;
  } else {
    // get the highest index key, then add 1 for the next empty spot
    nextIndexKey = this.findIndexKey(true) + 1;
  }

  // add the string at the next index key
  this[nextIndexKey] = string;
};

Queue.prototype.dequeue = function() {
  // Remove and return the string at the front of the queue

  var lowestIndexKey;
  // if the queue is empty, return undefined
  if (Object.keys[this] === 0) {
    return undefined;
  } else {
    // get the lowest index key
    lowestIndexKey = this.findIndexKey(false);
  }

  // create variable to point at value st lowest index key
  var result = this[lowestIndexKey];

  // delete the key:value pair at lowest index key
  delete this[lowestIndexKey];

  return result;
};

Queue.prototype.size = function() {
  // calculate & return the number of items in the queue
  return Object.keys(this).length;
};

Queue.prototype.findIndexKey = function(highest) {
  // finds either the highest (the last) or lowest (the first) index key in the queue

  // get the current keys of the queue
  var keys = Object.keys(this);

  // sort the keys ascending
  keys.sort((a, b) => a - b);

  var result;
  if (highest) {
    // get the highest
    result = keys[keys.length - 1];
  } else {
    // get the lowest
    result = keys[0];
  }

  return result;
};