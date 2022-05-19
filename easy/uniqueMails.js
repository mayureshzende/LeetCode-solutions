var numUniqueEmails = function (emails) {
  const set = new Set();
  const len = emails.length;
  for (let i = 0; i < len; i++) {
    let arr = emails[i].split("@");
    arr[0] = arr[0].split("+")[0].replace(/\./g, "");
    set.add(arr.join("@"));
  }
  return set.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ]),
  2
);

/* 

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
*/
