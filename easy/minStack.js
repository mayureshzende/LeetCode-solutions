var MinStack = function () {
  this.stack = [];
  this.min = -Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length > 0) return this.stack[this.stack.length - 1];
  return undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
  let length = this.stack.length;
  let min = this.stack[0];
  for (let i = 0; i < length; i++) {
    let curr = this.stack[i];
    if (curr < min) min = curr;
  }
  return min;
};

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin()); //-3 ;
obj.pop();
console.log(obj.top()); // 0
console.log(obj.getMin()); // -2 ;
// [[],[-2],[0],[-3],[],[],[],[]]
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
