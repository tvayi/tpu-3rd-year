function calculateProbability(array, number) {

    if (Array.isArray(array)) {
        if (typeof number != 'number'){
          return 'Invalid input: second argument is not a number'
        }
        let more_or_equal = 0
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] == 'number') {
                if (array[i] >= number) {
                    more_or_equal += 1
                }
            }
            else {
              console.log('Not a number found, skipping')
            }
        }
        if (array.length > 0){
          percent = 100 * more_or_equal / array.length
          rounded = Math.round(percent * 10) / 10
          return rounded + '%'
        }
        else{
          return '0%'
        }
    }
    else {
        return 'Invalid input: first argument is not an array'
    }
}


console.log(calculateProbability([2, 3, 4], 3))
console.log(calculateProbability([1, 6, 3], 0))
console.log(calculateProbability([6, 9, 1, 10, 13], 33))
console.log(calculateProbability([1, 8, 12, 2, 88, 6, 8], 11))
console.log(calculateProbability('array', 11))
console.log(calculateProbability([2, 3, 5], 'number'))
console.log(calculateProbability([6, 'nine', 1, 10, 13], 2))
console.log(calculateProbability([], 1))
