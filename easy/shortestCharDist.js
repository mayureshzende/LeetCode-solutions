var shortestToChar = function (s, c) {
  let res = new Array(s.length);
  const len = s.length;
  let c_pos = -len;
  for (let i = 0; i < len; i++) {
    if (s[i] === c) {
      c_pos = i;
    }
    res[i] = i - c_pos;
  }
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === c) {
      c_pos = i;
    }
    res[i] = Math.min(res[i], Math.abs(i - c_pos));
  }
  return res;
};

/* 
[
  12, 13, 14, 0, 1,
   0,  0,  1, 2, 3,
   4,  0
]
*/

console.log(
  shortestToChar("loveleetcode", "e"),
  [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
);
// 3, 5, 6, and 11
// l o v e l e e t c o d  e
// 0 1 2 3 4 5 6 7 8 9 10 11
// 3 2 1 0 1 0 0
// 3 2 1 0 1 0 0 1 2 2 1 0
