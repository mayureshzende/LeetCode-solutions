/**
 * @param {string} s
 * @return {number}
 */
// 207ms runtime
var lengthOfLongestSubstring1 = function (s) {
  let h = {};
  let ml = 0;
  let start = -1;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (h[cur] > start) start = h[cur];
    h[cur] = i;
    ml = Math.max(ml, i - start);
  }
  return ml;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charSet = new Set();
  let longest = 0;
  let left = 0;
  // left and right, Sliding window using 2 pointers concept.
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    while (charSet.has(char)) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(char);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

console.log(lengthOfLongestSubstring("ab cabcbb"), 3);
console.log(lengthOfLongestSubstring("bbb"), 1);
