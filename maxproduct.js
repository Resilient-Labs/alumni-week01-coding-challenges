// Given an array of integers , 
// Find the maximum product obtained from multiplying 
// 2 adjacent numbers in the array.


const adjacentElementsProduct = array => {
    let newArr = [];
    for(i = 0; i < array.length - 1; i++){
      //push the adjacent array into the new array
      newArr.push(array[i] * array[i+1])
    }  
    //reteirate through the newArr and return the max number
    return Math.max(...newArr)
  }
  
  
  console.log(adjacentElementsProduct([5, 8]), 40);
  console.log(adjacentElementsProduct([1, 2, 3]), 6);
  console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);