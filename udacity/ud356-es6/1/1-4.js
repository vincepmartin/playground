/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 * Todo: Print out every day...
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
//
for(let day of days) {
  console.log(`${day.substring(0,1).toUpperCase()}${day.substring(1)}`)
}

