var average = function (salary) {
  let min = Math.min(...salary);
  let max = Math.max(...salary);

  let sum = salary.reduce((acc, curr) => (acc += curr), 0) - (max + min);

  return sum / (salary.length - 2);
};
