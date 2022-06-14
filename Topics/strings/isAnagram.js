var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    t = t.replace(ch, "");
    console.log(t);
  }
  return t.length === 0;
};

const isAnagram = (s, t) => {
  let letArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    letArr[s[i].charCodeAt() - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    letArr[t[i].charCodeAt() - 97]--;
  }
  console.log(letArr);
  return letArr.every((i) => i === 0);
};

console.log(isAnagram("anagram", "nagaram"), true);
console.log(isAnagram("rat", "car"), false);
console.log(isAnagram("ruyam", "mayur"), true);
