function uniteUnique(arr) {
  
  var args = Array.prototype.slice.call(arguments);
  
  var tempArray = [];
  var duplicate = 0;
  
  for (i=0; i < args.length; i++) {
    for (j=0; j < args[i].length; j++) {
      var index = args[i][j];
      if (tempArray.indexOf(index) < 0) {
        tempArray.push(index);
      }
    }
  }
  
  return tempArray;
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);