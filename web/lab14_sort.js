function bubbleSort(arr) {
    arr = arr.map(function (x) {
        return parseInt(x, 10);
    });
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}


function reverseBubbleSort(arr) {
    arr = arr.map(function (x) {
        return parseInt(x, 10);
    });
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] < arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

function findMax(number) {
    if (Number.isInteger(number)){
        numbToArray = Array.from(number.toString())
        sortedSmaller = bubbleSort(numbToArray)
        sortedBigger = reverseBubbleSort(numbToArray)
        strSmaller = sortedSmaller.join('')
        strBigger = sortedBigger.join('')
        return parseInt(strBigger) - parseInt(strSmaller)
    }
    else{
        return 'Error: Invalid input'
    }
}

console.log(findMax(191999)) // = 999911 - 119999
console.log(findMax(21)) // = 21 - 12
console.log(findMax('21'))
console.log(findMax(14234243)) // = 44433221 - 12233444
console.log(findMax(1)) // = 1 - 1
console.log(findMax(10)) // = 10 - 1
console.log(findMax(1000000)) // = 1000000 - 1 
