const repeatString = function(str, numRepeat) {
    if (numRepeat < 0)
        return 'ERROR';
    let newStr = "";
    for(let i = 0; i < numRepeat; i++){
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
