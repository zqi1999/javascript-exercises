const sumAll = function (n1, n2) {
  if (typeof n1 != "number" || typeof n2 != "number" || n1 < 0 || n2 < 0)
    return "ERROR";
  var start, end;
  if (n1 < n2) {
    start = n1;
    end = n2;
  } else {
    start = n2;
    end = n1;
  }

  //   return ((start + end) * (end - start + 1)) / 2; // easy math equation
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
