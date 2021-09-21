function mapEngToMorse(word) {
  if (!(typeof word === 'string')) {
    return 'Error: it is not a string'
  }
  var eng_to_morse = {
    'a' : '.-',
    'b' : '-...',
    'c' : '-.-.',
    'd' : '-..',
    'e' : '.',
    'f' : '..-.',
    'g' : '--.',
    'h' : '....',
    'i' : '..',
    'j' : '.---',
    'k' : '-.-',
    'l' : '.-..',
    'm' : '--',
    'n' : '-.',
    'o' : '---',
    'p' : '.--.',
    'q' : '--.-',
    'r' : '.-.',
    's' : '...',
    't' : '-',
    'u' : '..-',
    'v' : '...-',
    'w' : '.--',
    'x' : '-..-',
    'y' : '-.--',
    'z' : '--..',
    '.' : '.-.-.-',
    '?' : '..--..',
    ',' : '--..--',
    '!' : '-.-.--',
    ' ' : '',
    
  };
  var outword = ''
  for (var i = 0; i < word.length; i++) {
    letter = word[i].toLowerCase();
    if (letter in eng_to_morse) {
        outword += eng_to_morse[letter]
    }
    else {
        console.log("Error: no key " + letter +  "in map")
        outword += '#'
    }
    outword += ' '
  }
  return outword
}

console.log(mapEngToMorse('test'))
console.log(mapEngToMorse('???,,,???'))
console.log(mapEngToMorse(''))
console.log(mapEngToMorse('tesт'))
console.log(mapEngToMorse(3))
console.log(mapEngToMorse('Hello!'))
console.log(mapEngToMorse('a b'))
