const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, num) => total += num, 0);
};

const multiply = function(nums) {
    return nums.reduce((total, num) => total * num, 1);
};

const power = function(a, pow) {
    return a ** pow;
};

const factorial = function(num) {
    if (num == 0) return 1;
	let total = num;
    for (let i = num-1; i > 0; i--) {
        total = total * i;
    }
    return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
