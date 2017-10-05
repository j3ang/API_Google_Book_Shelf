$(document).ready(function(){ //variables used in this script is protected from gloable


var my_data;
var num=0;

$('#form').on('submit', function(e) {
      var input = $('#inputText').val();
      $.ajax({
          type: "GET",
          url: 'https://www.googleapis.com/books/v1/volumes?q=' + input,
          dataType: "html",
          success: function(results){
             // $('#results').html(results.kind);
             // $('#results').css('color', 'white');

        var data = JSON.parse(results);
        if (Array.isArray(data.items)) {
          // console.log(data.items);
          parseData(data);

        } else {
          console.log('single object: ');
          console.log(data);
        }


          }
      });

      e.preventDefault();
});


function parseData(arr) {   
      //clears out the old resultss, and change the font color
      $('#results').empty();
      $('#results').css('color', 'white');
    //display data
      var checkbox = $('<input type="checkbox" />');
    for( var x=0; x < arr.items.length; x++){
      console.log(arr.items);
      $('#results').append("<li>" + 
        "<img id=img" + x + " " + "src=" + arr.items[x].volumeInfo.imageLinks.thumbnail+ "/>" +
       arr.items[x].volumeInfo.title + "</li>");
    }   
}


//     var title = data.items[0].volumeInfo.title;
//     var img = data.items[0].volumeInfo.imageLinks.thumbnail;

//     ++num;
//     $('#results').append('<li><img src="'+img+'" id="img'+num+'"/>'+
//       '<a id="'+data.title+'" href="'+data.items[0].volumeInfo.infoLink+'">'+title+'</a></li>');
   
//     $('#img'+num).wrap($('<a>',{
//    href:img
// })

//     );

//     console.log($('#img'+num));
//     }
    
//     if ((typeof(data.items) === "undefined")){
//       alert("results not found!");
//     }

//   });

//   e.preventDefault();
// }



//For later



// //function to validate what type of format user is using search for the book
// //and then parse it to keys
// function formatValidation(userinput){

// }


// function getBookDetails(isbn) {

//   // Query the book database by ISBN code.
//   isbn = isbn || "9781451648546"; // Steve Jobs book

//   var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

//   var response = UrlFetchApp.fetch(url);
//   var results = JSON.parse(response);

//   if (results.totalItems) {

//     // There'll be only 1 book per ISBN
//     var book = results.items[0];

//     var title = (book["volumeInfo"]["title"]);
//     var subtitle = (book["volumeInfo"]["subtitle"]);
//     var authors = (book["volumeInfo"]["authors"]);
//     var printType = (book["volumeInfo"]["printType"]);
//     var pageCount = (book["volumeInfo"]["pageCount"]);
//     var publisher = (book["volumeInfo"]["publisher"]);
//     var publishedDate = (book["volumeInfo"]["publishedDate"]);
//     var webReaderLink = (book["accessInfo"]["webReaderLink"]);

//     // For debugging
//     Logger.log(book);

//   }

// }
});