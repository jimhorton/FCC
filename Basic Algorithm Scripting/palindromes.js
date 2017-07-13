function palindrome(str) {
  // Good luck!
  
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
	  
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  
  return reverseStr === lowRegStr; 
}