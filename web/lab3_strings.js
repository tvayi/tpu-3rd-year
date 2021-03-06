function arrayToSplitted(array) {
    
    if (Array.isArray(array)) { 
  		let splitted = []
          for (var i = 0; i < array.length; i++) {
              tuple = splitCode(array[i])
  			splitted.push(tuple)
  			}
  		return splitted
    }
    else {
        return 'Invalid input: it is not an array'
    }
}

function splitCode(code){
	if (/[a-z]\d+/gi.test(code)){
		for (var j = 0; j < code.length; j++) {
			if (!isNaN(code.charAt(j))){
				var letters = code.substring(0, j)
				var numbers = code.substring(j)
				var tuple = [letters, numbers]
				return tuple
			}
		}
		return [code, '']
	}
	else{
		return 'The code in inappropriate'
	}
}

codeArray = [
	'newcheck134',
	'a24342',
	'check',
	'12312',
	'3123new',
	'notaletter*123',
	'',
	'>',
	'abc123',
	'ABC133'
]
notAnArray = 'string'
splitted = arrayToSplitted(codeArray)
notAnArraySplitted = arrayToSplitted(notAnArray)
console.log(splitted)
console.log(notAnArraySplitted)
