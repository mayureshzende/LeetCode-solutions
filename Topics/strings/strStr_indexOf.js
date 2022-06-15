var strStr = function (haystack, needle) {
  const nedlen = needle.length;
  const haylen = haystack.length;
  if (!needle.length) return 0;
  for (let i = 0; i < haylen; i++) {
    if (needle === haystack.substr(i, nedlen)) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"), 2);
console.log(strStr("car", "ra"), -1);
console.log(strStr("a", "a"), 0);
