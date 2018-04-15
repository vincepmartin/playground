/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let count = 0
  J.split("").forEach( x => {
    S.split("").forEach( y => {
      if(x === y) {
        console.log(`\tWe have a match! Count is ${count}`)
        count = count + 1
      }
    })
   }) 
   return count
};