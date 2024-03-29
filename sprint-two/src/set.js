var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  } else {
    return 'Items in a set must be unique';
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  let location = this._storage.indexOf(item);
  this._storage.splice(location, 1);
};

/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
