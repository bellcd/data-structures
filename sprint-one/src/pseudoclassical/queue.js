var Queue = function() {
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.front] = value;
	this.front++;
}

Queue.prototype.dequeue = function() {
	if (this.front - this.back > 0) {
		var output = this.storage[this.back];
		delete this.storage[this.back];
		this.back++;
	} else {
		size = 0;
	}
	return output;
}

Queue.prototype.size = function() {
	return this.front - this.back;
}

