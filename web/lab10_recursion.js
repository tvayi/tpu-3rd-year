function unpackArray(array) {
    if (Array.isArray(array)) {
        unpackedArray = extractFromDimension(array, [])
        return unpackedArray
    }
    else {
        return 'Invalid input: it is not an array'
    }
}

function extractFromDimension(array, unpackedArray) {
    if (typeof array[0] == 'number' || typeof array[0] == 'string') {
        unpackedArray = unpackedArray.concat(array)
        return unpackedArray
    }
    for (let i = 0; i < array.length; i++) {
        unpackedArray = extractFromDimension(array[i], unpackedArray)
    }
    return unpackedArray
}

let a = unpackArray([[3, 4, 5], [6, 7 , 8], [9, 10], [[4, 8]]])
let b = unpackArray([[[[[[[]]]]]]])
let c = unpackArray([3, 4, 5])
let d = unpackArray('array')
let e = unpackArray([[[[[8]]]]])
let f = unpackArray([['hello', 'there'], ['obi', 'van', 'kenobi']])
let g = unpackArray([['hello', 3], ['there', 4]])

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
