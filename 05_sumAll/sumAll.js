const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max) || min < 1 || max < 1) {
    return "ERROR";
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  let sum = 0;
  for (min; min <= max; min++) {
    sum += min;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
