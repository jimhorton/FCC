function sumPrimes(num) {
  
  var sum = 0;
  
  function isPrime(val) {
      
    if (val === 1) return false;
      
    for (j=2; j <= val; j++) {
      if ( (val % j === 0) && (j !== val) )
        return false;
      }
    
    return true;
  }
  
  for (i=1; i <= num; i++) {
    
    if ( isPrime(i)) {
      sum += i;
    }
  }
  
  return sum;
}

