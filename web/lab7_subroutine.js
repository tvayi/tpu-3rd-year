function sumOfEvens(array) {
  if (isValidArray(array)) { 
  	var sum = 0
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].length; j++) {
        object = array[i][j]
        if (validateNumber(object)) {
          if (isEven(array[i][j])) {
          sum += array[i][j]
          }
        }
        else {
          console.log('Element ' + object + ' is NaN, skipping')
        }
      }
  	}
  	return sum
    }
    else {
      return 'Invalid input: it is not 2D array'
    }
}
 
function isEven(number) {
  if (number % 2 === 0) { 
    return true
  }
  else {
    return false 
  }
}

function isValidArray(array) {
  if (Array.isArray(array) && (Array.isArray(array[0]))) {
    return true
  }
  else {
    return false
  }
}

function validateNumber(object) {
  if (typeof object == 'number') {
    return true
  }
  else {
    return false
  }
}

arr1 = [
  [3, 2, 3],
  [5, 6, 7],
  [2, 3, 4]

]

arr2 = [2, 3, 4]

arr3 = [
  [3, 2, 3],
  [5, 'string', 7],
  [2, 3, 4]

]

console.log(sumOfEvens(arr1))
console.log(sumOfEvens(arr2))
console.log(sumOfEvens(arr3))
