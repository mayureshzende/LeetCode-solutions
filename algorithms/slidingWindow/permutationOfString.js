/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length || !s2.length) return false;
  if (!s1.length) return true;
  let charArr = new Array(26).fill(0);
  let i = 0;
  let j = 0;
  let total_count = s1.length;
  for (let i = 0; i < s1.length; i++) {
    let curIdx = s1[i].charCodeAt() - 97;
    charArr[curIdx]++;
  }
  while (j < s2.length) {
    let curIdx = s2[j++].charCodeAt() - 97;

    if (charArr[curIdx] > 0) {
      total_count--;
      charArr[curIdx]--;
    }
    if (total_count === 0) return true;

    if ((j - i === s1.length && charArr[curIdx] >= 0, i++)) {
      charArr[curIdx]++;
      total_count++;
    }
  }

  //   console.log(charArr);
  return false;
};

console.log(checkInclusion("abc", "eidbacooo"), true);
console.log(checkInclusion("ab", "eidboaoo"), false);
//     int[] map = new int[26];
//     for(char c : s1.toCharArray()) map[c - 'a']++;
//     int j = 0, i = 0;
//     int count_chars = s1.length();
//     while(j < s2.length()){
//         if(map[s2.charAt(j++) - 'a']-- > 0)
//             count_chars--;
//         if(count_chars == 0) return true;
//         if(j - i == s1.length() && map[s2.charAt(i++) - 'a']++ >= 0)
//             count_chars++;
//     }
//     return false;
// }
