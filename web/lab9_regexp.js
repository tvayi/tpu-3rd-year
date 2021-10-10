function sumOfNegatives(code) {
  if (!(typeof code === 'string')) {
    return 'Error: it is not a string'
  }
  var regexpPattern = /--?\d+/g;
  var negatives = code.match(regexpPattern)
  if (negatives != null) { // condition to prevent TypeError while using reduce 
    sum = negatives.reduce(function(prev, num) {
    return prev + +num;
    }, 0);
    return sum
  }
  else {
    return 'There are no negative integers in code'
  }
}

console.log(sumOfNegatives('ajkfs21bsfj-11fskj-1fj3&&'));
console.log(sumOfNegatives(31))
console.log(sumOfNegatives('????'))
