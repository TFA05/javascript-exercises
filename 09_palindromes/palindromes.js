const palindromes = function (str) {
    str = str
            .toLowerCase()
            .split('')
            .filter(char => char.match(/[A-z]/) || char.match(/[0-9]/))
            .join('');

    strReverse = str
            .split('')
            .reverse()
            .join('');

    return str === strReverse;
};

// Do not edit below this line
module.exports = palindromes;
