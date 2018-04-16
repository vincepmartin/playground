/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  if (ops === null)
    return 0
     
  let point_stack = []
  let totalPoints = 0

  ops.forEach(c => {
    if (c === '+') {
      point_stack.push(point_stack[point_stack.length - 1] + point_stack[point_stack.length - 2])
    } else if ( c === 'C') {
      point_stack.pop()
    } else if ( c === 'D') {
      point_stack.push(point_stack[point_stack.length-1] * 2)
    } else {
      point_stack.push(parseInt(c))
    }
   })

    // Done parsing.
    point_stack.forEach( n => {
      totalPoints = totalPoints + n
    })

    console.log(point_stack)
    return totalPoints
};

test = ["5","2","C","D","+"]
console.log(`input: ${test}`)
console.log(`output: ${calPoints(test)}`)