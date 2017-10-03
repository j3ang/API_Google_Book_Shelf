var my_data;
var num=0;
$('#form').on('submit', function(e) {
  var isbn = $('#inputText').val();
  var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn ;
  $.get(url, function(data) {
    var title = data.items[0].volumeInfo.title;
    var img = data.items[0].volumeInfo.imageLinks.thumbnail;

    ++num;
    $('#results').append('<li><img src="'+img+'" id="img'+num+'"/>'+
      '<a id="'+data.title+'" href="'+data.items[0].volumeInfo.infoLink+'">'+title+'</a></li>');
   
    $('#img'+num).wrap($('<a>',{
   href:img
}));

    console.log($('#img'+num));

  });

  e.preventDefault();
});





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
