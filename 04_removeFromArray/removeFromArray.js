const removeFromArray = function(arr) {
    let targets = Array.from(arguments).slice(1);
    let result = [];
    arr.forEach(element => {
        if (!targets.includes(element)) result.push(element);
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
