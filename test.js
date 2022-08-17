// const obj = {
//   name: "mayur",
//   id: 1,
// };

// console.log(obj);

const clone = {
  //   ...obj
  proffession: "full stack developer",
};

console.log(clone);
const { name: firstName = "developer", add = "pune", ...rest } = clone;

console.log(firstName);
console.log(rest);
console.log(add);
