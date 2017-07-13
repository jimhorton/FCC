function reverseString(str) {
    newString = str.split("");
  
    var revStr = newString.reverse();
    str = revStr.join("");
  
  return str;
}

reverseString("hello");

