var truncateSentence = function (s, k) {
  let str = "";
  let arr = s.split(" ");
  for (let i = 0; i < k; i++) {
    str += arr[i] + " ";
  }
  return str.trimEnd();
};

console.log(
  truncateSentence("Hello how are you Contestant", 4),
  "Hello how are you"
);
