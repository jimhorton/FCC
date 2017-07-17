
function myReplace(str, before, after) {
  
  // first split the string into an array breaking at spaces
  newStr = str.split(' ');
  
  for (i=0; i < newStr.length; i++) {
    if (newStr[i] === before) {
      
      // check to see if the 'before' value is uppercase
      if (before.charAt(0) === before.charAt(0).toUpperCase() ) {
         
        // if not, captialize it
        after = after.charAt(0).toUpperCase() + after.slice(1);
      }
      
      // replace the string
      newStr[i] = after;
    }  
  }
  
  str = newStr.join(' ');
  
  return str;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting"