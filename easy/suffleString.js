var restoreString = function (s, indices) {
  const obj = {};
  for (let i = 0, len = indices.length; i < len; i++) {
    obj[indices[i]] = s[i];
  }
  return Object.values(obj).join("");
};
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]), "leetcode");
