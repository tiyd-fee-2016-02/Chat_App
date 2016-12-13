// var toriTest = function(){
//   console.log("tori's test");
//   var testName = "testingtesting";
//   return testName;
// }
// var testName;


// text: "<img src ='" + json.data[0].images.fixed_height.url + "'>"


var giphyTest = function(){


  var theGIF = $.getJSON ("http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=" + APIRequest, function (json){
    json.data[0].images.fixed_height.url

  })

  return "<img src =" + theGIF + "></img>";

}


// var theString = "hello world"
//
// var splitString = theString.split(" ")
//
// console.log(splitString[0]);
