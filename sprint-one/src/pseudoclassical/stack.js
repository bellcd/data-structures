var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.count] = value;
	this.count++;
}

Stack.prototype.pop = function() {
	if (this.count > 0) {
		this.count--;
	}

	var output = this.storage[this.count];
	  delete this.storage[this.count];
	  return output;	
}

Stack.prototype.size = function() {
		return this.count
}