function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  if (num >= str.length){
    return str;
  } 
  else if (num <=3) {
    newStr = str.slice(0, num);
    newStr += "...";
  }
  else if (str.length <= 3) {
    newStr = str.slice(0, num);
    newStr += "...";
  }
  else if (num < str.length) {
    newStr = str.slice(0, num - 3);
    newStr += "...";
  }

  return newStr;
}