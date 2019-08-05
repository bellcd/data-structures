var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    if (arguments.length === 0) {
      return 'You Must Pass In A Value'
    }
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
    list.length++;
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = temp.next;
    list.length--;
    return temp.value;
  };

  list.contains = function(target) {
    var node = this.head;
    if (!node) {
      return false;
    } else if (node === target) {
      return true;
    }
    while (node.next !== null) {
      if (node.value === target || node.next.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
