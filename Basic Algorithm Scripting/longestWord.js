function findLongestWord(str) {
  
  splitArray = str.split(" ");
  
  var greatest = 0;
  
  for (i=0; i < splitArray.length; i++) {
    if (splitArray[i].length > greatest) {
      greatest = splitArray[i].length;
    }  
  }
  
  return greatest;
}