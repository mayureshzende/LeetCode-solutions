class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(vlaue) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    return this.length === 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.length--;
    return this;
  }
}

// const mq = new Queue();
// mq.isEmpty();
// mq.enqueue("mayur");
// mq.enqueue("shreyash");
// console.log(mq);
// mq.dequeue();
// mq.dequeue();
// console.log(mq);

class MyStack {
  constructor() {
    this.first = new Queue();
    // this.second = new Queue();
  }
  push(value) {
    if (!this.first.length) {
    }
    return this.first.enqueue(value);
    console.log(this);
  }

  pop() {
    return this.first.dequeue();
  }

  top() {
    return this.first.peek();
  }

  empty() {
    return this.first.isEmpty();
  }
}
const ms = new MyStack();
ms.push(1);
ms.push(2);
console.log(ms.top()); // return 2
console.log(ms.pop()); // return 2
console.log(ms.empty()); // return False

// const ms = new MyStack();
// ms.push("mayur");
// ms.push("shreyash");
// console.log(ms);
// ms.pop();
// console.log("top is ", ms.top());
// console.log(" is empyty ", ms.empty());
// console.log(ms);
// ms.pop();
// console.log(" is empyty ", ms.empty());
var MyStack1 = function () {
  this.firstQueue = new Queue();
  this.secondQueue = new Queue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack1.prototype.push = function (x) {
  this.secondQueue.enqueue(x);

  while (!this.firstQueue.isEmpty()) {
    this.secondQueue.enqueue(this.firstQueue.dequeue());
  }

  let temp = this.secondQueue;
  this.secondQueue = this.firstQueue;
  this.firstQueue = temp;
};

/**
 * @return {number}
 */
MyStack1.prototype.pop = function () {
  return this.firstQueue.dequeue();
};

/**
 * @return {number}
 */
MyStack1.prototype.top = function () {
  return this.firstQueue.peek();
};

/**
 * @return {boolean}
 */
MyStack1.prototype.empty = function () {
  return this.firstQueue.isEmpty();
};

/**
 * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
 * void push(int x) Pushes element x to the top of the stack.
 * int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
/**
Initialize your data structure here.
*/
var MyStack = function () {
  this.queue = [];
  this.tmp = [];
};
/**

Push element x onto stack.
@param {number} x
@return {void}
*/
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};
/**

Removes the element on top of the stack and returns that element.
@return {number}
*/
MyStack.prototype.pop = function () {
  return this.queue.pop();
};
/**

Get the top element.
@return {number}
*/
MyStack.prototype.top = function () {
  if (this.queue.length > 0) {
    return this.queue[this.queue.length - 1];
  }
};
/**

Returns whether the stack is empty.
@return {boolean}
*/
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
