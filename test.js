// const obj = {
//   name: "mayur",
//   id: 1,
// };

// console.log(obj);

const clone = {
  //   ...obj
  proffession: "full stack developer",
};

// console.log(clone);
const { name: firstName = "developer", add = "pune", ...rest } = clone;

// console.log(firstName);
// console.log(rest);
// console.log(add);

const one = {
  id: 1,
  count: 10,
};

const two = {
  ...clone,
  obj: 2,
};

const three = { ...one, ...two };
// console.log(three);

const { id: uid = 11, test = "testing destructing", ...rem } = one;
// console.log(uid);
// console.log(test);
// console.log(two);
// console.log(one);

const arr = [1, 2, 3, 4];

const [a, b, ...r] = arr;

console.log(a);
console.log(b);
console.log(r);

function callMe({ id, ...rest }) {
  console.log(id);
  console.log(rest);
}

callMe(one);
