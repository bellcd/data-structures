var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
	enqueue(value) {
		this.storage[this.front] = value;
		this.front++;
	},
	dequeue() {
		if (this.front - this.back > 0) {
			var output = this.storage[this.back];
			delete this.storage[this.back];
			this.back++;
		} else {
			size = 0;
		}
		return output;
	},
	size() {
		return this.front - this.back;
	}
};


