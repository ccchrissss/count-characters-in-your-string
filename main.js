function count(str) {

  let charCount = {}

  for (let i = 0; i < str.length; i++) {
    
    if ( Object.keys( charCount ).includes( str.charAt(i) ) == true ) {
      charCount[`${str.charAt(i)}`] += 1 // may need to add back ticks inside bracket
    }

    if ( Object.keys( charCount ).includes( str.charAt(i) ) == false ) {
      charCount[`${str.charAt(i)}`] = 1
    }
    
  }

  return charCount
}

console.log(count('hello'))
console.log(count(''))


// parameters: string
// return: object literal    // tells how many instances of each character reside in string
// e.g. count('hello')
// results in {'h': 1, 'e': 1, 'l': 2, 'o': 1}


// declare a variable charCount and assign it to an empty object {}
// for loop beginning at i = 0; i < string.length; i++
  // if charCount includes str.charAt(i) then add 1 and reassign the value paired with str.charAt(i) within the object
  // if charCount does not include str.charAt(i) then add key str.charAt(i) and assign 1 to the value
// end loop
// return charCount
