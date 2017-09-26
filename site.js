$('user_form').on('submit', function(e){

$.getJSON(&#8216;http://api.automeme.net/text.json&#8217;, function (json) {
console.log(&#8216;Meme: &#8216; + json[0]);
});

});