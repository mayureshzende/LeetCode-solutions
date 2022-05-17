var findWords = function (words) {
  const res = [];
  const row1 = "qwertyuiop".split("");
  const row2 = "asdfghjkl".split("");
  const row3 = "zxcvbnm".split("");

  for (let i = 0, len = words.length; i < len; i++) {
    let key;
    let word = words[i];
    let char = word[0].toLowerCase();
    let vaild = true;
    if (row1.includes(char)) {
      key = row1;
    } else if (row2.includes(char)) {
      key = row2;
    } else {
      key = row3;
    }

    for (const letter of word) {
      if (!key.includes(letter.toLowerCase())) vaild = false;
    }
    if (vaild) res.push(word);
  }
  return res;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]), ["Alaska", "Dad"]);
console.log(findWords(["omk"]), []);
console.log(findWords(["adsdf", "sfd"]), ["adsdf", "sfd"]);

// var findWords = function (words) {
//   const row1 = "qwertyuiop".split("");
//   const row2 = "asdfghjkl".split("");
//   const row3 = "zxcvbnm".split("");

//   function check(word) {
//     // console.log(word[0]);
//     word = word.toLowerCase();
//     for (let i = 0, len = word.length; i < len; i++) {
//       let row = row1.includes(word[0])
//         ? row1
//         : row2.includes(word[0])
//         ? row2
//         : row3;
//       if (!row.includes(word[i])) {
//         return false;
//       }
//     }
//     return true;
//   }

//   return words.filter((word) => check(word));
// };
/* 
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/
