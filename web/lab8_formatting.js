function changeReg(string) {
  if (isString(string)) {
    splitted = string.split('')
    for (var i = 0; i < splitted.length; i++) {
      if (isLowerCase(splitted[i])) {
        splitted[i] = string[i].toUpperCase()
      }
      else {
        splitted[i] = string[i].toLowerCase()
      }
    }
    string = splitted.join('')
    return string
  }
  else {
    return 'Indalid input: it is not a string'
  }
}


function isString(object) {
  if (typeof object == 'string') { 
    return true
  }
  else {
    return false
  }
}

function isLowerCase(str)
{
    return str == str.toLowerCase() && str != str.toUpperCase()
}

console.log(changeReg('aaBBce'))
console.log(changeReg(32))
console.log(changeReg('ddd'))
console.log(changeReg([]))
console.log(changeReg('3232'))
