/**
 * @param {string} s
 * @return {boolean}
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
 */
var isValid = function (s) {
  let stack = [];
  stack[0] = s[0];
  for (let i = 1; i < s.length; i++) {
    let len = stack.length - 1;
    if (s[i] === ")" && stack[len] === "(") {
      stack.pop();
    } else if (s[i] === "]" && stack[len] === "[") {
      stack.pop();
    } else if (s[i] === "}" && stack[len] === "{") {
      stack.pop();
    } else {
      stack.push(s[i]);
      //   console.log(stack);
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"), true);
console.log(isValid("[)"), false);
console.log(isValid("{{}[][[[]]]}"), true);
console.log(isValid("{{}[][[[]]]]"), false);
console.log(isValid("{{({})}}"), true);
