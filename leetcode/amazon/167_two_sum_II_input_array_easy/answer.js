/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let answers = [] 
  for(let i = 0; i < numbers.length; i++) {
    let x = numbers[i]
    
    Inner:
    for(let j = i + 1; j < numbers.length; j++) {
      let y = numbers[j]
      if(x + y === target){
        answers.push(i + 1)
        answers.push(j + 1)
        break Inner
      } else if(x + y > target)
        break Inner
    }
  }
  return answers
};

// Test.
console.log(twoSum([2, 3, 4], 6))