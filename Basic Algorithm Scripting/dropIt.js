function dropElements(arr, func) {
  // Drop them elements.
  var newArray = [];
  
  for(i=0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArray = arr.slice(i);
      return newArray;
    }
  }
  return [];
}

//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});