function hasTargetSum(array, target) {
  
//   // Write your algorithm here
for (let i=0;i<array.length;i++){
/* a + b = c ; we have c = target
first iteration to find a = array[i]
*/ 
  const b = target - array[i]
  /*
   second iteration to start at index 1 so it doesn't compare
  against itself on the conditonal statement
  */
  for (let num = i+1; num<array.length; num++) {
    if(array[num]===b)return true
    } 
}
return false
}


/* 
  Write the Big O time complexity of your function here
first iteration O(n)
const declaration O(1)
second iteration O(n)
conditional statement O(1)
*/

/* 
  Add your pseudocode here
    sum all numbers in the array to each other, recurse
    compare the numbers to the other argument and return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
