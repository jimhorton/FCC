function sumFibs(num) {
  
  var prevNum = 0;
  var currentNum = 1;
  var sum = 0;

  
  while (currentNum <= num) {
    
    if (currentNum % 2 !== 0) {
      sum += currentNum;
    }
    
   currentNum += prevNum;
   prevNum = currentNum - prevNum;    
    
  }
  
  
  return sum;
}