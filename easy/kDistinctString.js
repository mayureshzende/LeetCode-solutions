var kthDistinct = function (arr, k) {
  if (k > arr.length) return "";
  const ht = {};
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    ht[arr[i]] = ht[arr[i]] + 1 || 1;
  }
  //   console.log(ht);
  for (const key in ht) {
    if (ht[key] === 1) {
      res.push(key);
    }
  }
  //   console.log(res);

  return res[k - 1] || "";
};

// console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2), "a");
// console.log(kthDistinct(["a", "b", "a"], 3), "");
// console.log(kthDistinct(["aaa", "aa", "a"], 1), "aaa");
console.log(kthDistinct(["dbty"], 1), "dbty");
