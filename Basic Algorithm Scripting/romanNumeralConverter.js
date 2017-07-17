
function convertToRoman(num) {
  
 var temp = [];  

  function calcThousands(num) {
    switch (num) {
      case 1:
        temp += "M";
        break;
      case 2:
        temp += "MM";
        break;
      case 3:
        temp += "MMM";
        break;
      case 4:
        temp += "MMMM";
        break;
      case 5:
        temp += "MMMMM";
        break;
      case 6:
        temp += "MMMMMM";
        break;
      case 7:
        temp += "MMMMMMM";
        break;
      case 8:
        temp += "MMMMMMMM";
        break;
      case 9:
        temp += "MMMMMMMMM";
        break;    
   }    
  }
  
  function calcHundreds(num) {
    switch (num) {
      case 1:
        temp += "C";
        break;
      case 2:
        temp += "CC";
        break;
      case 3:
        temp += "CCC";
        break;
      case 4:
        temp += "CD";
        break;
      case 5:
        temp += "D";
        break;
      case 6:
        temp += "DC";
        break;
      case 7:
        temp += "DCC";
        break;
      case 8:
        temp += "DCCC";
        break;
      case 9:
        temp += "CM";
        break;    
   }
  }
  
  function calcTens(num) {
    switch (num) {
      case 1:
        temp += "X";
        break;
      case 2:
        temp += "XX";
        break;
      case 3:
        temp += "XXX";
        break;
      case 4:
        temp += "XL";
        break;
      case 5:
        temp += "L";
        break;
      case 6:
        temp += "LX";
        break;
      case 7:
        temp += "LXX";
        break;
      case 8:
        temp += "LXXX";
        break;
      case 9:
        temp += "XC";
        break;    
   }
  }
  
  function calcOnes(num) {
    switch (num) {
      case 1:
        temp += "I";
        break;
      case 2:
        temp += "II";
        break;
      case 3:
        temp += "III";
        break;
      case 4:
        temp += "IV";
        break;
      case 5:
        temp += "V";
        break;
      case 6:
        temp += "VI";
        break;
      case 7:
        temp += "VII";
        break;
      case 8:
        temp += "VIII";
        break;
      case 9:
        temp += "IX";
        break;    
   }    
  }
  
  if ( num / 1000 >=1) {
    calcThousands(Math.trunc (num / 1000) );
    calcHundreds(Math.trunc( (num % 1000) /100));
    calcTens(Math.trunc( (num % 100) / 10) );
    calcOnes(Math.trunc( (num % 10) ) );     
  }
  else if ( (num / 100) >= 1) {
    calcHundreds(Math.trunc(num/100));
    calcTens(Math.trunc( (num % 100) / 10));
    calcOnes(num % 10);
  }
  else if ( (num / 10) >= 1) {
    calcTens(Math.trunc(num/10));
    calcOnes(num % 10);
  }
  else {
    calcOnes(num % 10);
  }
   
 return temp;
}

//convertToRoman(1000);

