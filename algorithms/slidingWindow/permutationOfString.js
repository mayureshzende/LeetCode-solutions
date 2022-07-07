/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length || !s2.length) return false;
  if (!s1.length) return true;
  let s1Arr = new Array(26).fill(0);
  let s2Arr = new Array(26).fill(0);
  let sc2 = [...s2];

  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1[i].charCodeAt() - 97]++;
  }
  for (let i = 0; i < s2.length; i++) {
    s2Arr[s2[i].charCodeAt() - 97]++;
  }

  for (let i = s1.length - 1; i < sc2.length; i++) {
    s2Arr[sc2[i].charCodeAt() - 97]++;
    if (isEqual(s2Arr, s1Arr)) {
      return true;
    }
    s2Arr[sc2[i - s1.length + 1].charCodeAt() - 97]--;
  }
  console.log(s1Arr);
  console.log(s2Arr);

  return false;
};

function isEqual(s1, s2) {
  for (let i = 0; i < 26; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }
  return true;
}

console.log(checkInclusion("ab", "eidbacooo"), true);
// console.log(checkInclusion("ab", "eidboaoo"), false);
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
