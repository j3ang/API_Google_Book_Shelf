$(document).ready(function(){ //variables used in this script is protected from gloable
  var num=0;

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
    });
    e.preventDefault();
  });


  function parseData(arr) {   
      //clears out the old resultss, and change the font color
      $('#results').empty();
      $('#results').css('floate', 'left');
      $('#results').css('height', '29.125em');
      $('#results').css('overflow-y', 'auto');

      $('#results').css('color', 'white');
    //display data
    for( var x=0; x < arr.items.length; x++){
      $('#results').append("<li>" + 
        "<img id=img" + x + " " + "src=" + arr.items[x].volumeInfo.imageLinks.thumbnail+ "/>" +
        arr.items[x].volumeInfo.title + "</li>");


        //select books that user wants to save


        //hover effect to enlarg thumbnails
        $('#img'+x).hover(function(){
          console.log("hover in");
        $(this).css("width", "150px");
        }, function(){
          console.log("hover out");
        $(this).css("width", "30px");
    });
        //prevent movile devices from scrolling off screen when reach to the end
        
    }


  }

});

    // var checkbox = $('<input type="checkbox" />');