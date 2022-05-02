var mostWordsFound = function (sentences) {
  let resLen = [];
  for (let i = 0; i < sentences.length; i++) {
    resLen.push(sentences[i].split(" ").length);
  }
  //   let senLen = sentences.reduce((acc, curr) => {
  //     return acc.concat(curr.split(" ").length);
  //   }, []);
  //   //   console.log(Math.max(...senLen));
  return Math.max(...resLen);
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ]),
  6
);
