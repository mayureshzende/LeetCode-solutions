var countMatches1 = function (items, ruleKey, ruleValue) {
  let ruleObj = {
    type: 0,
    color: 1,
    name: 2,
  };

  let count = 0;

  for (let i = 0, len = items.length; i < len; i++) {
    // console.log(items[i][ruleObj[ruleKey]]);
    if (items[i][ruleObj[ruleKey]] === ruleValue) {
      count++;
      //   console.log(items[i][ruleObj[ruleKey]]);
    }
  }

  return count;
  //   console.log(" === ");
};

var countMatches = function (items, ruleKey, ruleValue) {
  switch (ruleKey) {
    case "type": {
      return items.filter((item) => item[0] === ruleValue).length;
    }

    case "color": {
      return items.filter((item) => item[1] === ruleValue).length;
    }

    case "name": {
      return items.filter((item) => item[2] === ruleValue).length;
    }
  }
};

/* 
ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
*/
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  ),
  1
);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  ),
  2
);
