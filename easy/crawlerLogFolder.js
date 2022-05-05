var minOperations = function (logs) {
  let main = 0;

  for (let i = 0, len = logs.length; i < len; i++) {
    if (logs[i] === "../" && main > 0) {
      main--;
    }
    if (logs[i].slice(-1) === "/" && logs[i].slice(-2) !== "./") {
      main += 1;
    }
  }
  return main;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]), 2);
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]), 3);
console.log(minOperations(["d1/", "../", "../", "../"]), 0);

/* 
"../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
"./" : Remain in the same folder.
"x/" : Move to the child folder named x (This folder is guaranteed to always exist).
*/
