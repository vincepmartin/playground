/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let resultsMap = new Map()
 
  // Parse string into a map with counts of characters.
  s.split('').forEach( c => {
    if(resultsMap.has(c))
      resultsMap.set(c, resultsMap.get(c) + 1)
    else {
      resultsMap.set(c, 1)
    }
  })

  // Analyze results.
  for(i = 0; i < s.length; i ++) {
    if(resultsMap.get(s[i]) < 2)
      return i
  }

  return -1
};

let t1 = 'leetcode'
let t2 = `loveleetcode`
console.log(`${t1}: ${firstUniqChar(t1)}`)
console.log(`${t2}: ${firstUniqChar(t2)}`)