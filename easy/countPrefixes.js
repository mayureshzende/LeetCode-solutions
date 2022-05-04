var countPrefixes = function (words, s) {
  let count = 0;

  for (i = 0, len = words.length; i < len; i++) {
    if (s.indexOf(words[i]) === 0) {
      count++;
    }
  }
  return count;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"), 3);
console.log(countPrefixes(["a", "a"], "aa"), 2);
