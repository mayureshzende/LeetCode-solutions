var reorderLogFiles = function (logs) {
  let wordLogs = [];
  let digitLogs = [];

  for (let i = 0; i < logs.length; i++) {
    // console.log(!isNaN(+logs[i].split(" ")[1]));
    let arr = logs[i].split(" ");
    if (isNaN(arr[1])) {
      wordLogs.push({ id: arr.slice(0, 1), body: arr.slice(1).join(" ") });
    } else {
      digitLogs.push(logs[i]);
    }
  }
  wordLogs.sort((log1, log2) => {
    if (log1.body < log2.body) return -1;
    if (log1.body > log2.body) return 1;
    if (log1.id < log2.id) return -1;
    if (log1.id > log2.id) return 1;
  });
  let sortedLogs = wordLogs.map((log) => `${log.id} ${log.body}`);
  return sortedLogs.concat(digitLogs);
};

console.log(
  reorderLogFiles([
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo",
  ]),
  ["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]
);
