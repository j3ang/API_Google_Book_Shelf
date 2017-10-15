$(document).ready(function(){ //variables used in this script is protected from gloable

var bookcount = 0;

//jquery UI for list selecting effect
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
      $('#results').append("<li id=book" + x +">" + "<img id=img" + x + 
        " src=" + arr.items[x].volumeInfo.imageLinks.thumbnail + "/>"+ 
        "<p id=title" + x +">" + (x+1) + ". "+ arr.items[x].volumeInfo.title + "</p>" + 
        "<p class=author id=author" + x +">" + arr.items[x].volumeInfo.authors + "</p></li>");

      } catch (e if e instanceof TypeError) {
        // statements to handle TypeError exceptions
        console.log("image" + x + " TypeError?");            
      } //end of try/catch blcok
      
      //add link to the image
      $('#img'+x).wrap("<a href='" + arr.items[x].volumeInfo.previewLink +"'/>");

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
      $('#book'+ x).on("click", function(){
          if ($('#add').val){
            $('#add').remove();
            $(this).append("<button id=add>Add</button>");
          }

        //add button onclick listener
        $('#add').on('click', function(){
          console.log("add clicked");
          console.log($(this).parent()[0]);
          console.log($(this).parent()[0].id);
          bookcount++;
          var re = /\s\D*\s/g;
          var bookarray = re.exec($(this).parent()[0].innerText);
          $('#mybooks').append("<p>" + bookcount + "." + bookarray + "</p>");
        });//end ofList onclick handler

      });
    }//end of display data

  }//end of parse data

});//end of site.js

