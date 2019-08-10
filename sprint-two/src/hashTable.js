

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  this._haveRemovedSomething = false; // assuming that when first building the hash table, you will select an appropriate _limit size. ie, only checking to see if we need to make _.storage smaller AFTER deliberately removing a tuple from the hash table.
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

  console.log('inserted: ', k, ':', v, '_limit: ', this._limit);
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

  console.log('remove: ', k, '_limit: ', this._limit);

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
  this._haveRemovedSomething = true;
};

HashTable.prototype.ratioCalculator = function () {
  var tupleCount = this._counter;
  if (tupleCount / this._limit >= 0.75) {
    this._limit = this._limit * 2;
    this.resize();
  }
  if (this._haveRemovedSomething && tupleCount / this._limit <= 0.25) {
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
      this.insert(bucket[0][0], bucket[0][1]);
      // account for .insert() incrementing _counter, when what we're really doing here is rehasing the indices
      this._counter--;
    } else {
      bucket.forEach(function(tuple) {
        this.insert(tuple[0], tuple[1]);
        this._counter--;
      }, this);
    }
  });

  this._haveRemovedSomething = false;
};

/*
 * Complexity: What is the time complexity of the above functions? Very often O(1), but worst case in O(n)
 */

