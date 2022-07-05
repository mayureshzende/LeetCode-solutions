/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    // console.log(s);
    str[i] = reverse(str[i]);
  }

  return str.join(" ");
};

function reverse(s) {
  return s.split("").reverse().join("");
}

console.log(
  reverseWords("Let's take LeetCode contest"),
  "s'teL ekat edoCteeL tsetnoc"
);
