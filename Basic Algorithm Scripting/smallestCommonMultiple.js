
function smallestCommons(arr) {
  
  var newArray = [];
  
  arr.sort(function(a, b) {
    return b - a;
  });
  
  for (i = arr[0]; i >= arr[1]; i--) {
    newArray.push(i);
  }
  
  
  var n;
  var LCM = 0;
  var inc = 1;
 
  
  while (n!= newArray.length) {
    LCM = newArray[0] * newArray[1] * inc;
    for (n=2; n < newArray.length; n++) {
      if (LCM % newArray[n] !== 0) {
        break;
      }
    }
    inc++;
  }
  
  return LCM;
}


//smallestCommons([1,5]);