var findRestaurant = function (list1, list2) {
  const obj = {};
  for (let i = 0; i < list1.length; i++) {
    obj[list1[i]] = i;
  }
  const res = [];
  let sum = Infinity;
  for (let i = 0; i < list2.length; i++) {
    const index1 = obj[list2[i]];
    if (index1 >= 0 && index1 + i < sum) {
      sum = index1 + i;
    }
  }

  for (let i = 0; i < list2.length; i++) {
    const ind = obj[list2[i]];
    if (ind >= 0 && ind + i === sum) res.push(list2[i]);
  }

  return res;
};
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  ),
  ["Shogun"]
);

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  ),
  ["Shogun"]
);

const findRestaurant1 = function (list1, list2) {
  let sum = Infinity;
  const map = list1.reduce((acc, str, index) => {
    acc[str] = index;
    return acc;
  }, {});
  for (let i = 0; i < list2.length; i++) {
    const index1 = map[list2[i]];
    if (index1 >= 0 && index1 + i < sum) {
      sum = index1 + i;
    }
  }
  const result = [];
  for (let i = 0; i < list2.length; i++) {
    const index1 = map[list2[i]];
    if (index1 >= 0 && index1 + i === sum) {
      result.push(list2[i]);
    }
  }
  return result;
};
