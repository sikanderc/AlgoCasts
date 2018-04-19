// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let results = []
  for (i = 0, j = 0; i < n; i++, j+=2) {
    results.push((" ").repeat(n-i-1) + "#".repeat(j+1) + (" ").repeat(n-i-1))
    console.log(results[i]);
  }
}

module.exports = pyramid;
