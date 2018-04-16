// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let array = str.split("")
  // array.reverse()
  // return array.join("")

  //without reverse method
  // let reversed = ""
  // for (let character of str) {
  //   reversed = character + reversed
  // }
  // return reversed

  return str.split("").reduce((rev, char) => char + rev, "")
}

module.exports = reverse;
