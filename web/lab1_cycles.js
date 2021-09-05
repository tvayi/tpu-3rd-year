function removeAbc(string) {
  if (typeof string != 'string') { 
    return null;
  }
  for (var i = 0; i < string.length; i++) {
      if ((string[i] === 'a') || (string[i] === 'b') || (string[i] === 'c')){
        string = string.replace(string[i], '')
        i--
      }
    }
    return string;
}

function removeAbcNoCycle(string) {
  if (typeof string != 'string') { 
    return null;
  }
  strNoA = string.replace(/a/g, '')
  strNoAB = strNoA.replace(/b/g, '')
  strNoABC = strNoAB.replace(/c/g, '')
  return strNoABC;
}


console.log(removeAbc('auebkdlwcldheabc1'))
console.log(removeAbc(31))
console.log(removeAbc('aaabbbccc'))
console.log(removeAbc('c'))
console.log(removeAbc('hello'))
