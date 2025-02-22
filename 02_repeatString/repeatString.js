const repeatString = function (text, num) {
  let repeatedText = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    repeatedText += text;
  }
  return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
