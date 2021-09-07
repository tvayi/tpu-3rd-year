function removeAbc(string) {
  if (typeof string != 'string') { 
    return 'Invalid input: it is not a string';
  }
  
  if ((string.indexOf('a') == -1) && (string.indexOf('b') == -1) && (string.indexOf('c') == -1)){
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
console.log(removeAbc('caaabbbeeeccibieaciddddccdcccc'))
console.log(removeAbc('c'))
console.log(removeAbc('hello'))
