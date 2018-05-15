let n = 4;

let test = function(n) {
  let r = 0
  for (let i = 1; i <= n-1; i++) {
    for(let j = i + 1; j <= n; j++) {
      for(let k = 1; k <= j; k++) {
        r = r + 1
      }
    } 
  }

  return r
}

for(let i = 0; i < 20; i++)
  console.log(`${i} ${test(i)}`)