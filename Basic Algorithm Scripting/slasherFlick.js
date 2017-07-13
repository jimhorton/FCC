function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  newArray = arr.splice(0, howMany);
  
  /*for (i=0; i < howMany; i++) {
    newArray = arr.slice(i, howMany);
  }*/
  
  return arr;
}

slasher([1, 2, 3], 2);