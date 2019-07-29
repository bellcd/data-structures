var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(string) {
    // Add a string to the back of the queue

    // determine what index key to place the next value at
    var nextIndexToAdd;

    // if queue is empty, place next index key at 0
    if (Object.keys(this).length === 0) {
      nextIndexToAdd = 0;
    } else {
      nextIndexToAdd = this.findIndexKey(true) + 1;
    }

    // add the string at the highest index key
    this[nextIndexToAdd] = string;
  },
  dequeue: function() {
    // Remove and return the string at the front of the queue

    // find the lowest index key
    var lowestIndexKey;

    // if the queue is empty, return undefined
    if (Object.keys(this).length === 0) {
      return undefined;
    } else {
      // get the lowest index key
      lowestIndexKey = this.findIndexKey(false);
    }

    // create a new variable pointing at the value at the lowest index key
    var result = this[lowestIndexKey];

    // delete the key:value pair at the lowest index key
    delete this[lowestIndexKey];

    return result;
  },
  size: function() {
    // calculate & return the number of items in the queue
    return Object.keys(this).length;
  },
  findIndexKey: function(highest) {
    // find the highest (ie, the back) or lowest (ie, the front) index key in the queue
    // get all the keys in the queue
    var keys = Object.keys(this);

    // sort the keys ascending
    keys.sort((a, b) => a - b);

    // create a variable for the first or last
    var result;
    if (highest) {
      result = keys[keys.length - 1];
    } else {
      result = keys[0];
    }

    return result;
  }
};