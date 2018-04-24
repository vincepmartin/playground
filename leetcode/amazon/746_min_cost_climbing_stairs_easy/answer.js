/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // early returns. 
  if(cost === null || cost.length < 2) {
    console.log(`Not enough stairs.`)
    return null
  } 

  // Let us climb some stairs.
  let currentStair
  let totalCost = 0

  // Special case of only 3 stairs.
  if(cost.length === 3) {
    if(cost[1] < (cost[0] + cost[2]))
      return cost[1]
  }

  // Which stair should we start on?
  if(cost[0] < cost[1]) 
    currentStair = 0
  else
    currentStair = 1

  totalCost = totalCost + cost[currentStair]

  // console.log(`Total: ${totalCost} currentStair: ${currentStair}`)
  while(currentStair < cost.length - 2) {
    if(cost[currentStair + 1] < cost[currentStair + 2]) {
      currentStair = currentStair + 1
      totalCost = totalCost + cost[currentStair]
    } else {
      currentStair = currentStair + 2
      totalCost = totalCost + cost[currentStair]
    }
    // console.log(`Loop current stair is: ${currentStair}`)
  }
  return totalCost
};

let t1 = [10, 15, 20]
let t2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

console.log(minCostClimbingStairs(t1))
console.log(minCostClimbingStairs(t2))