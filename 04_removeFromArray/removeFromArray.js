const removeFromArray = function (textArray, ...theArgs) {
  const retArr = textArray.filter((i) => !theArgs.includes(i));
  return retArr;
};

// Do not edit below this line
module.exports = removeFromArray;
