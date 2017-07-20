function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  function replacer(exp) {
    return '-';
  }
  
  // replace lower-upper
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  newString = str.toLowerCase().replace(/[\_\s]/g, replacer);
  
  return newString;
}

//spinalCase('AllThe-small Things');