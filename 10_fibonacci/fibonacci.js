const fibonacci = function(n) {
    let finalNum = 1;
    let lastNum = 1;
    let helpVal;
    n = parseInt(n);
    if (n < 0)
        return "OOPS";
    if (n === 0)
        return 0;
    if (n === 1 || n === 2)
        return 1;
    for (let i = 2; i < n; i++) {
        helpVal = finalNum;
        finalNum += lastNum;
        lastNum = helpVal;
    }
    return finalNum;
};

// Do not edit below this line
module.exports = fibonacci;
