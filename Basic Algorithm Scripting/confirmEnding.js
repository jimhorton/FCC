function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  var targetSize = target.length;  
  
  if(targetSize == 1) {
    newStr = str.substr(str.length - 1, 1);
  }
  else {
    newStr = str.substr(str.length - targetSize);
  }

  return newStr === target;
}