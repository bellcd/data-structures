class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // if any arguments were given, copy those arguments to the instance
    Array.from(arguments).forEach(arg => {
      this[arg] = arg;
    });
  }

  enqueue(string) {
    // add a string to the back of the queue

    // create a pointer for the number of the next key index to add
    var nextKeyIndexToAdd;
    if (Object.keys(this).length === 0) {
      nextKeyIndexToAdd = 0;
    } else {
      nextKeyIndexToAdd = this.findIndexKey(true) + 1;
    }

    // add the key:value pair at that index
    this[nextKeyIndexToAdd] = string;
  }

  dequeue() {
    // remove and return the string at the front of the queue

    // if the queue is empty, return undefined
    if (Object.keys(this).length === 0) {
      return undefined;
    }

    // else, find the lowest key index
    var lowestKeyIndex = this.findIndexKey(false);

    // create a variable that points at the value at that position in the queue
    var result = this[lowestKeyIndex];

    // delete the key:value pair from the queue
    delete this[lowestKeyIndex];

    return result;
  }

  size() {
    // calculate and return the number of items in the queue
    return Object.keys(this).length;
  }

  findIndexKey(back) {
    // return the key of the element at the back or back of the queue

    // create a list of the keys
    var keys = Object.keys(this);

    // sort the keys ascending
    keys.sort((a, b) => a - b);

    var result;
    if (back) {
      // point at the key with the highest number
      result = keys[keys.length - 1];
    } else {
      // point at the key with the lowest number
      result = keys[0];
    }

    return result;
  }
}
