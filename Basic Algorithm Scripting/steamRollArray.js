function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  var newArray = [];
  
  var steamRoll = function (newArr) {
      if (!Array.isArray(newArr)) {
       newArray.push(newArr);
      }
     else {
       for (var j in newArr) {
         steamRoll(newArr[j]);
       }
     }
  };
  
  arr.forEach(steamRoll);
  
  return newArray;
}

//steamrollArray([1, [2], [3, [[4]]]]);

