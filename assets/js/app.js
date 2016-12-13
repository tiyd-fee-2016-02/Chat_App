var text;
var splitText;
var textRequest;
var APIRequest;
var theGIF;
var rating;
var ratingTest;

new Vue({
  el:'#chat-area',
  data: {
    newChat:'',
    chats:[
      {text: "your first chat!"},
      {text: "type @help to start"}
    ] //closes chats array
  },

  methods: {
    sendChat: function(text){
      text = this.newChat
      var splitText = text.split(" ")

      var textRequest = splitText[0]
  

      switch(textRequest) {
        case "@help":

            this.chats.push({text: "please help"}),
            this.newChat = ''
            break;
        case "@movie":
            this.chats.push({text: atMovie()}),
            this.newChat = ''
            break;
        case "@weather":
            this.chats.push({text: "you asked for weather"}),
            this.newChat = ''
            break;
        case "@temp":
            this.chats.push({text: "the temp is..."}),
            this.newChat = ''
            break;
        case "@giphy":
            this.chats.push({text: giphyTest()}),
            this.newChat = ''
            console.log("giphy case workedS")
            break;
        case "@dictionary":
          var dict = $.getJSON("http://dictionaryapi.net/api/definition/" + text)
            dict.done(function(data) {
              console.log("got data", data);
            });
            this.chats.push({text: "the definition is" + dict.definitions }),
            this.newChat = ''
            break;
        default:
            this.chats.push({text: "sorry I didn't understand. try @help"}),
            this.newChat = ''
          } //closes switch
        } // close sendChat
  } //closes methods section

}); //closes Vue
