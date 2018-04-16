/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sumS = 0 
  let sumT = 0

  sS = s.split("").sort()  
  sT = t.split("").sort()

  if( s.split('').sort().join('') === t.split('').sort().join('') )
    return true
  else
    return false

};

console.log(isAnagram('ac','bb'))