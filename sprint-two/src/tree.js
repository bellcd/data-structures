var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var output = false;
  if (this.value === target) {
    output = true;
    return output;
  }
  var searchChildren = function (target, children) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        output = true;
      }
      searchChildren(target, children[i].children);
    }
    return output;
  };
  return searchChildren(target, this.children);
};



/*
 * Complexity: What is the time complexity of the above functions? (n ^ n)
 */
