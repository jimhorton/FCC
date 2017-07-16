
function sumAll(arr) {
  
  var num1 = arr[0];
  var num2 = arr[1];
  
  var largest = Math.max(num1, num2);
  var smallest = Math.min(num1, num2);
  var sum = 0;
  
  for (i=smallest; i <= largest; i++) {
    sum += i;
  }
  
  return sum;
}

//sumAll([1, 4]);