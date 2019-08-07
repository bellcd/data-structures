

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
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
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucket = this._storage.get(index);

  // loop through bucket
  for (let i = 0; i < bucket.length; i++) {
    // check if current tuple key equals key to be removed
    if (bucket[i][0] === k) {
      // if YES, remove current tuple
      bucket.splice(i, 1);
      --i;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions? Very often O(1), but worst case in O(n)
 */


