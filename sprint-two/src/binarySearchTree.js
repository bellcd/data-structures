var BinarySearchTree = function(value) {
  let node = {};
  node.value = value;
  // think both of these values should start at null ??
  node.left = left;
  node.right = right;

  return node;
};

BinarySearchTree.prototype.insert = function(value) {
  // determine if value is greater than or less than current node's value
  let position;
  if (value < position) {
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
    this[position] = BinarySearchTree(value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
