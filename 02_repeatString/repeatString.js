const repeatString = function(str, n) {
    let num = parseInt(n);
    if (num < 0) return 'ERROR';
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
