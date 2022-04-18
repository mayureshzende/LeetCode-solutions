var average = function (salary) {
  let min = Math.min(...salary);
  let max = Math.max(...salary);

  let sum = salary.reduce((acc, curr) => (acc += curr), 0) - (max + min);

  return sum / (salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000], 2500.0));
