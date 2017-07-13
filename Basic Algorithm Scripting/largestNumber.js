function largestOfFour(arr) {
  // You can do this!
  
  var greatest = 0;
  var largeArray = [];
  
  for (i=0; i < arr.length; i++) {
    for (j=0; j < arr[i].length; j++) {
      if (arr[i][j] > greatest) {
        greatest = arr[i][j];
      }
    }
      largeArray.push(greatest);
      greatest = 0;
  }
  
  return largeArray;
}

