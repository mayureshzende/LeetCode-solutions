var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1, len = strs.length; i < len; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
    }
  }
  return prefix;
};

var longestCommonPrefix2 = function (strs) {
  let arr = strs.concat().sort();
  console.log(arr);
  let a1 = arr[0];
  let a2 = arr[arr.length - 1];
  let i = 0;
  while (i < a1.length && a1.charAt(i) == a2.charAt(i)) i++;

  return a1.slice(0, i);
};

console.log(longestCommonPrefix2(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix2(["dog", "racecar", "car"]), "");
console.log(longestCommonPrefix2(["mayuresh", "mayur", "mayu"]), "");
