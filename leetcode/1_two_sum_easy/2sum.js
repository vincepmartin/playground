/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Naive approach.
let twoSum = function(nums, target) {
  console.log(`Length: ${nums.length}`)
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
      if(i !== j) {
        if(nums[i] + nums[j] == target) {
          return [i,j];
        }
      }
    }
  }
}

console.log(twoSum([1,2,6,3], 9));