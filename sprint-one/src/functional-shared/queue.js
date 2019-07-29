var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};

  // copy methods in queueMethods into queue
  extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(string) {
    // get the size of the queue
    var length = this.size();
    var nextKey;
    // if the size of the queue is empty, set next key to 0
    if (length === 0) {
      nextKey = 0;
    } else {
    // else, compute the highest key index
      nextKey = this.findKeyIndex(true) + 1;
    }

    // add that key:value pair to the queue
    this[nextKey] = string;
  },
  dequeue: function() {
    var keyToRemove;

    // determine the lowest key index in the queue
    keyToRemove = this.findKeyIndex(false);

    // point a new variable at that value
    var copy = this[keyToRemove];

    // delete that key:value pair from queue
    delete this[keyToRemove];

    // return the new variable
    return copy;

  },
  size: function() {
    var length = 0;
    // iterate through queue and increment a length counter for each value that is NOT a function
    for (let key in this) {
      length = typeof this[key] === 'function' ? length : ++length;
    }
    return length;
  },
  findKeyIndex: function(highest) {
    var KeyIndex = 0;

    // create an array of the keys in queue
    var keys = Object.keys(this);

    // filter out keys that point at functions
    keys = keys.filter(key => typeof this[key] !== 'function');

    // sort keys ascending
    keys.sort((a, b) => a - b);

    // if there are more than 0 keys, return either the highest or lowest key index
    KeyIndex = keys.length > 0 ? keys[highest ? keys.length - 1 : 0] : 0;
    return Number.parseInt(KeyIndex);
  }
};

var extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};


