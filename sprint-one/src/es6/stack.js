class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // if there were any arguments passed in, copy them to the instance object
    Array.from(arguments).forEach(arg => {
      this[arg] = arg;
    });
  }

  push(string) {
    // Add a string to the top of the stack

    // get the current size of the stack
    var length = this.size();

    // add the new string at the top of the stack
    this[length] = string;
  }

  pop() {
    // Remove and return the string on the top of the stack

    // get the current size of the stack
    var length = this.size();

    // if the stack is empty, return undefined
    if (length === 0) {
      return undefined;
    }

    // create a variable to point to the value at the top of the stack
    var result = this[length - 1];

    // remove the element at the top of the stack
    delete this[length - 1];

    return result;
  }

  size() {
    // Calculate and return the number of items on the stack
    return Object.keys(this).length;
  }
}