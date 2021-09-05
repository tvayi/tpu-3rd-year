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


console.log(removeAbcNoCycle('auebkdlwcldheabc1'))
console.log(removeAbcNoCycle(31))
console.log(removeAbcNoCycle('aaabbbccc'))
console.log(removeAbcNoCycle('c'))
console.log(removeAbcNoCycle('hello'))
