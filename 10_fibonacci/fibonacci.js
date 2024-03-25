const fibonacci = function(val) {
    let num;
    if (typeof(val) != Number) {
        num = parseInt(val);
    } else {
        num = val;
    }

    if (num < 0) return "OOPS";
    if (num == 0) return 0;

    if (num == 1 || num == 2) return 1;

    let firstPrev = 1;
    let secondPrev = 1;
    for (let i = 2; i < num; i++) {
        let current = firstPrev + secondPrev;
        firstPrev = secondPrev;
        secondPrev = current;
    }

    return secondPrev;

};

// Do not edit below this line
module.exports = fibonacci;
