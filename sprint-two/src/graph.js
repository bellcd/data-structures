

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {
    edges: {}
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode]['edges'][toNode] !== undefined && this.nodes[fromNode] && this.nodes[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode]['edges'][toNode] = toNode;
  this.nodes[toNode]['edges'][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode]['edges'][toNode];
  delete this.nodes[toNode]['edges'][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes) {
    cb(node);
  }
};

Graph.prototype.directedOrUndirected = function (fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode) && this.hasEdge(toNode, fromNode)) {
    return 'Undirected';
  } else {
    return 'Directed';
  }
};

/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */


