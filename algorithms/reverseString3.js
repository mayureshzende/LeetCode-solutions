var reverseWords = function (s) {
  //   let str = s.split(" ");
  //   for (let i = 0; i < str.length; i++) {
  //     str[i] = reverse(str[i]);
  //   }
  return s.split("").reverse().join();
};

function reverse(str) {
  str = str.split("");
  for (let l = 0, r = str.length - 1; l < r; l++, r--) {
    let temp = str[l];
    str[l] = str[r];
    str[r] = temp;
  }
  return str.join("");
}

console.log(
  reverseWords("Let's take LeetCode contest"),
  "s'teL ekat edoCteeL tsetnoc"
);
