const palindromes = function (str) {
    for (let i = 0, j = str.length-1; i < j; i++, j--) {
        console.log(str.charAt(i) + " == " + str.charAt(j));
        while (str.charAt(i).match(/^[a-zA-Z0-9]+$/) == null && i < j) i+=1;
        while (str.charAt(j).match(/^[a-zA-Z0-9]+$/) == null && i < j) j-=1;
        console.log(str.charAt(i) + " == " + str.charAt(j));
        if (str.charAt(i).toLowerCase() != str.charAt(j).toLowerCase()) return false;
    }
    return true;
};

palindromes("Racecar!")
// Do not edit below this line
module.exports = palindromes;
