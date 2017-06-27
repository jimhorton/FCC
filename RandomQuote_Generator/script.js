$(document).ready(function() {
$("#next_quote").on('click', function(){
  $.getJSON("https://gist.githubusercontent.com/jimhorton/3b7dfb3e5901ce1043cbe918a9031cf2/raw/ad305d36f98110ea79bd243e669344e1bd4683f9/quotes.json", function(json){  
    var num = Math.floor(Math.random()*(json.length));
    var newQuote = json[num]; 
    var textQuote = newQuote["quote"];
    var authorQuote = newQuote["author"];
    $("#main_text").html(textQuote); 
    $("#author").html("~ " + authorQuote);
  });
});
  
  
$("#twit").on('click', function() {
   var quote = $("#main_text").html();
   var author = $("#author").html();
   var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(quote) + encodeURIComponent(author) + 
    '.' +
    '&url=' + 'https://codepen.io/jimhorton/full/XRyeQW/';
     
   window.open(tweetUrl);
});
});

