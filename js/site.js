$(document).ready(function(){ //variables used in this script is protected from gloable

$( "#results" ).selectable();

  $('#form').on('submit', function(e) {
    var input = $('#inputText').val();
    $.ajax({
      type: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + input + '&maxResults=40',
      dataType: "html",
      success: function (results){
       var data = JSON.parse(results);
       if (Array.isArray(data.items)) {
        console.log(data.items);
        parseData(data);
      } else {
        console.log('single object: ');
    // console.log(data);
        }
      }
    });//end of ajax
    e.preventDefault();
  });//end of form

  function parseData(arr) {   
      //clears out the old resultss, and change the font color
      $('#results').empty();
  

    //display data
      for( var x=0; x < arr.items.length; x++){

        try {
        $('#results').append("<li id=li" + x +">" + "<img id=img" +x
          + " src=" + arr.items[x].volumeInfo.imageLinks.thumbnail + "/>"
          + "<p id=title" + x +">" + (x+1) + ". "+ arr.items[x].volumeInfo.title + "</p>" + "<p id=author" + x +">" 
          + arr.items[x].volumeInfo.authors + "</p></li>");

        } catch (e if e instanceof TypeError) {
          // statements to handle TypeError exceptions
          console.log("image" + x + " TypeError?");            
        }
        
          //add link to the image
          $('#img'+x).wrap("<a href='" + arr.items[x].volumeInfo.previewLink +"'/>");

          //style author names
          $('#author'+x).css('color','#f9f494');
          $('#author'+x).css('font-size','0.8em');

          //hover effect to enlarg thumbnails
          $('#img'+x).hover(function(){
            console.log("hover in");
            $(this).css("width", "150px");
          }, function(){
            console.log("hover out");
            $(this).css("width", "30px");
            }
          );//end of img hover

          //List onclick handler
            $('#li'+x).on("click", function(){
                
                // confirm("Add this book?");
            });

      }//end of display data

  }//end of parse data

});//end of site.js

