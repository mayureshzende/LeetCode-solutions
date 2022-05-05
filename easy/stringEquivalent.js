var arrayStringsAreEqual = function (word1, word2) {
  //   let res = word1.join(""); //.split("");
  //   let str = word2.join(""); //.split("");
  //   console.log(str);
  return word1.join("") === word2.join("");
  for (let i = 0, len = str.length; i < len; i++) {
    let ind = res.indexOf(str[i]);
    console.log(ind);
    res[ind] = "";
  }
  console.log(res);
  return res.join("").length === 0;
};

console.log(arrayStringsAreEqual(["a", "bc"], ["ab", "c"]), true);

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]), true);
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]), false);
