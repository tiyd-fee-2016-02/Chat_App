// var atMovies = function(){
//   $.getJSON("http://www.omdbapi.com/?t=" + APIRequest + "&y=&plot=short&r=json",
//     function(json) {
//
//       rating = json.imdbRating;
//     });
//
//   return rating;
// }


var atMovie = function(){

APIRequest = splitText[1];

console.log(text);


  $.ajax({
    dataType: 'json',
    url: "http://www.omdbapi.com/?t=" + APIRequest + "&y=&plot=short&r=json",
    method: 'GET', // This is the default, but I thought I'd show it
    success: function (data) {
      console.log("data here", data);
      ratingTest = JSON.stringify(data.imdbRating);
  }

  // .done(function (data) {
  //   console.log("data here", data);
  // .done(function (data) {
  //   console.log(data.map(function (u) {
  //     return u.imdbRating;
  //   }));
  // });

  // console.log(JSON.stringify(data.imdbRating))
  // var ratingTest = JSON.stringify(data.imdbRating);
  // });

  // return ratingTest;

});

};
