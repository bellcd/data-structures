

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  this.ratioCalculator();
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    // if bucket doesn't exist already, create bucket
    this._storage.set(index, []);
  }

  // var for bucket
  let bucket = this._storage.get(index);

  // check if more than one tuple exists
  if (bucket.length > 1) {
    // iterate through tuples
    for (let i = 0; i < bucket.length; i++) {
      // look for match on the key
      if (bucket[i][0] === k) {
        // if YES, replace value at that key
        bucket[i][1] = v;
      } else {
        // if NO, add new tuple to bucket
        bucket.push([k, v]);
      }
    }
  } else if (bucket[0] && bucket[0][0] === k) {
    // if key name is the same, we're replacing value
    bucket[0][1] = v;
  } else {
    // push key:value tuple to bucket
    this._storage.get(index).push([k, v]);
  }
  this._counter++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucket = this._storage.get(index);
  if (!bucket) {
    return new Error('bucket does not exist at key ' + k);
  // return ('hash table does not contain key:value with key');
  }
  if (bucket.length > 1) {
    // iterate through bucket to find tuple
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  } else if (bucket[0]) {
    return bucket[0][1];
  }
  return new Error('hash table does not contain key:value with key ' + k);
  // return ('hash table does not contain key:value with key');
};

HashTable.prototype.remove = function(k) {
  this.ratioCalculator();
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucket = this._storage.get(index);
  if (!bucket) {
    throw new Error('Key does not exist');
  }

  // loop through bucket
  for (let i = 0; i < bucket.length; i++) {
    // check if current tuple key equals key to be removed
    if (bucket[i][0] === k) {
      // if YES, remove current tuple
      bucket.splice(i, 1);
      --i;
    }
  }
  this._counter--;
};

HashTable.prototype.ratioCalculator = function () {
  var tupleCount = this._counter;
  if (tupleCount / this._limit > 0.75) {
    this._limit = this._limit * 2;
    this.resize();
  }
  if (tupleCount > 0 && tupleCount / this._limit < 0.25) {
    this._limit = this._limit / 2;
    this.resize();
  }
};

HashTable.prototype.resize = function () {
  // This is the old storage array
  var tempStorage = this._storage;
  // Below is the new storage array that we will fill
  this._storage = LimitedArray(this._limit);
  tempStorage.each.call(this, function(bucket) {
    if (!bucket) {
      return;
    } else if (bucket.length === 1) {
      // Make note to go through with debugger to see if we need one or two index values to get the k, v locations
      this.insert (bucket[0][0], bucket[0][1]);
    } else {
      bucket.forEach.call (this, function (tuple) {
        this.insert (tuple[0], tuple[1]);
      });
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions? Very often O(1), but worst case in O(n)
 */


