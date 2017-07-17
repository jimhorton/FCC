
function translatePigLatin(str) {
  
  var newArray = str;//str.split(" ");
  
  // check if the first character is a vowel
  if (newArray[0] === 'a' || newArray[0] === 'e' || newArray[0] === 'i' ||
    newArray[0] === 'o' || newArray[0] === 'u') {
    str += 'way';
  }
  else if ( (newArray[0] !== 'a' && newArray[0] !== 'e' && newArray[0] !== 'i' && newArray[0] !== 'o' && newArray[0] && 'u') && 
            (newArray[1] !== 'a' && newArray[1] !== 'e' && newArray[1] !== 'i' && newArray[1] !== 'o' && newArray[1] && 'u') ) {
    str =  str.slice(2) + str.charAt(0) + str.charAt(1) + "ay";
  }
  else {     
    str =  str.slice(1) + str.charAt(0) + "ay";
  }
  
  return str;
}

//translatePigLatin("glove");