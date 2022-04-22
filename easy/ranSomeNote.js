var canConstruct = function (ransomNote, magazine) {
  let note = {};
  let magz = {};
  for (let i = 0; i < ransomNote.length; i++) {
    if (!note[ransomNote[i]]) {
      note[ransomNote[i]] = 1;
    } else {
      note[ransomNote[i]] += 1;
    }
  }
  for (let i = 0; i < magazine.length; i++) {
    if (!magz[magazine[i]]) {
      magz[magazine[i]] = 1;
    } else {
      magz[magazine[i]] += 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (
      magz[ransomNote[i]] === undefined ||
      magz[ransomNote[i]] < note[ransomNote[i]]
    ) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("a", "b"), false);
console.log(canConstruct("aa", "ab"), false);
console.log(canConstruct("aa", "aab"), true);
console.log(canConstruct("aab", "baa"), true);
console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"), true);

/* 
var canConstruct = function(ransomNote, magazine) {
    
    if (ransomNote.length > magazine.length) { return false; }
    var ransomNoteArr = ransomNote.split('');
    var oldMagazineLength = magazine.length;
    ransomNoteArr.forEach(function(item,index){
        magazine = magazine.replace(item,'');
    });
    if(oldMagazineLength == magazine.length +ransomNoteArr.length) {
        return true;
    } else {
        return false;
    }
};

*/
