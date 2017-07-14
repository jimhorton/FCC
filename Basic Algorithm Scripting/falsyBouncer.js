function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter(function(v) { return !!v; });
  

}

bouncer([7, 9, 0, "ate", "", null, false, undefined, NaN, 9]);