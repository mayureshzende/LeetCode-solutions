console.log(lengthOfLastWord("Hello World"), 5);
var lengthOfLastWord = function (s) {
  let str = s.trim().split(" ");

  return str[str.length - 1].length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "), 4);
console.log(lengthOfLastWord("luffy is still joyboy"), 6);
