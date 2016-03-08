


    testChat: function(text){
      var text = this.newChat.trim()
      if (text === "@test"){
        this.chats.push({text: "a test:"}),
        this.newChat = ''
      } //closes if
    } //closes sendChat


// GIPHY TESTING
// PUBLIC KEY: dc6zaTOxFJmzC
// PATH: /v1/gifs/search



// var xhr = $.get("http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=" + text);
//     xhr.done(function(data) {
//       $("span").html(data.data[0].images.fixed_height.url);
//     });


//WIKIPEDIA
// $.getJSON("http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&titles="+text+"&format=json&callback=?",
//   function(data) {
//     this.chats.push({text: data}),
//     this.newChat = '';
// });
