function fearNotLetter(str) {
  
  for (i=0; i < str.length; i++) {
    if ( str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}

//fearNotLetter("yz");