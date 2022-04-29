var countWords = function (words1, words2) {
  const ht = {};
  const ht2 = {};
  let count = 0;

  for (let i = 0; i < words1.length; i++) {
    ht[words1[i]] = ht[words1[i]] + 1 || 1;
  }

  for (let i = 0; i < words2.length; i++) {
    ht2[words2[i]] = ht2[words2[i]] + 1 || 1;
  }
  for (let i = 0; i < words2.length; i++) {
    if (ht2[words2[i]] + ht[words2[i]] === 2) count++;
  }
  return count;
};

console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  ),
  2
);

console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"]), 1);
console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"]), 0);
// (["b", "bb", "bbb"], ["a", "aa", "aaa"]), 0;

/* 
var countWords = function(words1, words2) {
    let hash = {}, count = 0;
    for(let i = 0; i < words1.length; i++) {
        hash[words1[i]] = (hash[words1[i]] || 0) + 1;
    }
    
    for(let i = 0; i < words2.length; i++) {
        if(hash[words2[i]] === 1) {
            hash[words2[i]] = -1;
            count++;
        }
        else if(hash[words2[i]] === -1) {
            count--;
            hash[words2[i]] = 0;
        }
    }
    
    return count;
};
*/
