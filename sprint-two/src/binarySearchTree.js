var BinarySearchTree = function(value) {

  this.value = value;
  this.left = null;
  this.right = null;


};

BinarySearchTree.prototype.insert = function(value) {
  // determine if value is greater than or less than current node's value
  let position;
  if (this.value > value) {
    position = 'left';
  } else {
    position = 'right';
  }
  // create position to store result of left or right from above
  // check if current node[position] exists or not
  if (this[position]) {
    // YES, recurse call
    this[position].insert(value);
  } else {
    // NO, set value at node[position]
    this[position] = new BinarySearchTree(value);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  let position;
  if (this.value === value) {
    return true;
  } else {
    if (this.value > value) {
      position = 'left';
    } else {
      position = 'right';
    }
    if (this[position]) {
      return this[position].contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb (this.value);
  // for (var key in this) {
  //   if (key !== 'value' && this[key] !== null && this.hasOwnProperty(key)) {
  //     this[key].depthFirstLog(cb);
  //   }
  // }
  // BELOW IS AN ALTERNATE WAY OF SOLVING THIS. THECOMMENTED OUT
  // PORTION ABOVE PASSES ALL TESTS AS WELL
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};
/*
 * Complexity: What is the time complexity of the above functions? O(n) for depthFirstLog, O(log n) for insert and contains.
 */
