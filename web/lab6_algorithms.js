function sortLastNames(array) {
    if (Array.isArray(array) && canBeSplitted(array)) {
      array.sort(function(a, b) {
      return a.split(' ')[1].length - b.split(' ')[1].length 
      || a.split(' ')[1].localeCompare(b.split(' ')[1]); 
    });
    return array
    }
    else {
        return 'Invalid input: not an array or strings are incorrect'
    }
}

function canBeSplitted(array) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') { 
      if (array[i].split(' ').length == 1){
        return false
      }
    }
    else {
      return false
    }
  }
  return true
}
 

console.log(sortLastNames(['Ben Jonson', 'Lu Kan', 'Tyler Derden']))
console.log(sortLastNames(['Ayanami Rey', 'Sindzi Ikary', 'Ayanami Ray',]))
console.log(sortLastNames(['Forrest Gump', 'Forrest Gump', 'Forrest Gump',]))
console.log(sortLastNames([]))
console.log(sortLastNames('last name'))
console.log(sortLastNames(['BenJonson', 'Lu Kan', 'Tyler Derden']))
console.log(sortLastNames(['BenJonson', 3, 'Tyler Derden']))
