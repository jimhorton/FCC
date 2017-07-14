function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  // First push the num onto the array
  arr.push(num);
  
  
  // Create a sort function to compare two numbers
  function sortNumber(a,b) {
    return a - b;
  }

  // Use the sortNumber function to sort the array
  arr.sort(sortNumber);
  
  // Search for the index of the inserted value and return it
  for (i=0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  
  // Included this return in case the conditional fails
  return i;
}

getIndexToIns([3, 10, 5], 3);