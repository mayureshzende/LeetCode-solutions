var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  if (needle.length === haystack.length) return 0;
  let nedLen = needle.length;
  for (let i = 0, len = haystack.length - nedLen; i <= len; i++) {
    if (needle === haystack.substring(i, i + nedLen)) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"), 2);
console.log(strStr("aaaaa", "bba"), -1);
