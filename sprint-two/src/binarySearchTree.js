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

BinarySearchTree.prototype.makePath = function (value) {
  var arr = []; // [5, 2, 3]
  var lastNum = [];
  let position;
  if (this.value === value) {
    lastNum.push(value);
    // [3]
    return lastNum;
  } else {
    if (this.value > value) {
      position = 'left';
      arr.push(this.value);
    } else {
      position = 'right';
      arr.push(this.value);
    }
    if (this[position]) {
      arr = this[position].contains(value);
    }
    var output = arr.concat(lastNum);
    // [5, 2].concat([3])
    return output;
  }
};

/*
 * Complexity: What is the time complexity of the above functions? O(n) for depthFirstLog, O(log n) for insert and contains.
 */
