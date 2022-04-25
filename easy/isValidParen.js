const isValid = (s) => {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("(}"), false);
console.log(isValid("{[]}"), true);

/* 
var isValid = function (s) {
  let str = [...s];

  for (i = 0, len = s.length; i < len; i++) {
    if (str[i] === "(" && str.indexOf(")") !== -1) {
      str[i] = "";
      str[str.indexOf(")")] = "";
    }
    if (str[i] === "{" && str.indexOf("}") !== -1) {
      str[i] = "";
      str[str.indexOf("}")] = "";
    }
    if (str[i] === "[" && str.indexOf("]") !== -1) {
      str[i] = "";
      str[str.indexOf("]")] = "";
    }
  }
  return str.join("").length === 0 ? true : false;
};

*/
