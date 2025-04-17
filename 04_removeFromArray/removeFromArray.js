/*const removeFromArray = function(arr, ...badNumList) {
    for (let badNum of badNumList){
        for (let i = arr.length - 1; i >= 0; i--){
            if (arr[i] === badNum)
                arr.splice(i, 1);
        }
    }

    return arr;
};*/

const removeFromArray = function(arr, ...badNumList){
    return arr.filter((num) => !badNumList.includes(num))
}


// Do not edit below this line
module.exports = removeFromArray;
