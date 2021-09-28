function sortLastNames(array) {
    if (Array.isArray(array)) {
      array.sort(function(a, b) {
      return a.split(' ')[1].length - b.split(' ')[1].length 
      || a.split(' ')[1].localeCompare(b.split(' ')[1]); 
    });
    return array
    }
    else {
        return 'Invalid input: it is not an array'
    }
}


console.log(sortLastNames(['Ben Jonson', 'Lu Kan', 'Tyler Derden']))
console.log(sortLastNames(['Ayanami Rey', 'Sindzi Ikary', 'Ayanami Ray',]))
console.log(sortLastNames(['Forrest Gump', 'Forrest Gump', 'Forrest Gump',]))
console.log(sortLastNames([]))
console.log(sortLastNames('last name'))
