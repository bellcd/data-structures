class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(front, back, storage) {
  	this.front = 0;
  	this.back = 0;
  	this.storage = {};
  }
  enqueue(value) {
  	this.storage[this.front] = value;
  	this.front++;
  }
  dequeue() {
  	if (this.front - this.back > 0) {
  		var output = this.storage[this.back];
  		delete this.storage[this.back]
  		this.back++
  	} else {
  		var size = 0;
  	}
  	return output
  }
  size() {
  	return this.front - this.back;
  }
}
