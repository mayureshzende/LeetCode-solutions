var countConsistentStrings = function (allowed, words) {
  let res = 0;

  allowed = new Set(allowed);
  for (const word of words) {
    res += isAllowed(word);
  }

  return res;

  function isAllowed(word) {
    for (const w of word) {
      if (!allowed.has(w)) return false;
    }
    return true;
  }
};

console.log(
  countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]),
  2
);
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]),
  7
);
