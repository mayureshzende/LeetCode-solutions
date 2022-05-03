var isPrefixString = function (s, words) {
  let str = "";
  if (s.charAt(0) !== words[0].charAt(0)) return false;
  for (let i = 0; i < words.length; i++) {
    str += words[i];
    if (str === s) {
      return true;
    }
  }
  return false;
};

console.log(
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]),
  true
);

console.log(
  isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"]),
  false
);
