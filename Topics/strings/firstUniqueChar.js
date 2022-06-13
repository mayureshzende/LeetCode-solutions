var firstUniqChar = function (s) {
  //   let hm = {};
  for (let ch of s) {
    // hm[ch] = (hm[ch] || 0) + 1;
    let idx = s.indexOf(ch);
    if (idx === s.lastIndexOf(ch)) {
      return idx;
    }
  }
  //   for (let [i, ch] of s.split("").entries()) {
  //     if (hm[ch] === 1) return i;
  //   }
  return -1;
};

console.log(firstUniqChar("leetcode"), 0);
console.log(firstUniqChar("loveleetcode"), 2);
