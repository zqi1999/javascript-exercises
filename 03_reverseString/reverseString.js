const reverseString = function(str) {
    if (str.length <= 1) return str;
    let mid = str.length / 2;
    return reverseString(str.substring(mid)) + reverseString(str.substring(0, mid));
};

const reverseStringSplitArray = function (string) {
    return string.split("").reverse().join("");
  }; //splits into array then reverse the array then joins back together with ''

// Do not edit below this line
module.exports = reverseString;
