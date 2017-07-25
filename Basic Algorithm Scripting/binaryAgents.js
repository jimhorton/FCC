
function binaryAgent(str) {
  
  var sentence = "";
  
  newArray = str.split(" ");
  
  function binaryToDecimal(newString) {
    
    var decimal = 0;
    var multiplier = 128; // 128 used for 8 bits, this could be calculated based on string length
    var sum = 0;
    
    for (j=0; j < newString.length; j++) {
      
      // check if digit is a 1, if so add multiplier
      if (newString.charCodeAt(j) === 49) {
        sum += 1 * multiplier;
      }
      multiplier /= 2;
    }
    
    return String(sum) + " ";
  }
  
  for (i=0; i<newArray.length; i++) {
    sentence += String.fromCharCode(binaryToDecimal( String(newArray[i]) ));
  }
  
  return sentence;
}

//binaryAgent("01000001");
//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");