// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split(" ")
  let newStr = []
  strArr.forEach((word, i) => newStr.push(word[0].toUpperCase()+ word.slice(1)))
  return newStr.join(" ")
}

module.exports = capitalize;
