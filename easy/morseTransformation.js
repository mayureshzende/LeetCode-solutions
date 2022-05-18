var uniqueMorseRepresentations = function (words) {
  const obj = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  const res = [];

  for (let i = 0; i < words.length; i++) {
    let str = "";

    for (const ch of words[i]) {
      str += obj[ch];
    }
    res.push(str);
  }
  return new Set(res).size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]), 2);
console.log(uniqueMorseRepresentations([""]), 1);
