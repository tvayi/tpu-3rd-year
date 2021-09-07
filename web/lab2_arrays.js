function sumInArray(array) {
    
    if (Array.isArray(array)) { 
        let elements_sum = 0
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] == 'number') {
                elements_sum += array[i]
            }
        }
        return elements_sum
    }
  
    else {
        return 'Invalid input: it is not an array'
    }
}
    



let fruits = ['Apple', 'Banana', 31, 9, 'Something', 91]
let empty = []
let stuff = ['32', 32, [], 'Something', 31, null, 0]
let error = 102
let recurrent = [[[[[[]]]]]]
let object = Object()
console.log(sumInArray(fruits))
console.log(sumInArray(empty))
console.log(sumInArray(stuff))
console.log(sumInArray(error))
console.log(sumInArray(recurrent))
console.log(sumInArray(object))
