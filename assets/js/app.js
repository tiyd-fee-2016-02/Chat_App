new Vue({
  el:'#chat-area',
  data: {
    newChat:'',
    chats:[
      {text: "your first chat!"},
      {text: "another chat"}
    ] //closes chats array
  },

  methods: {
    sendChat: function(text){
      var text = this.newChat.trim()

      switch(text) {
        case "@help":
            this.chats.push({text: "Here's some help:"}),
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
        var json = $.getJSON("http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=" + text)
              json.done(function(data) {
                 console.log("success got data", data);
            });
            // data[0].images.fixed_height.url
            this.chats.push({text: "<img src ='" + json.data[0].images.fixed_height.url + "'>"}),
            this.newChat = ''
            break;
        // case "@dictionary":
        //   var dict = $.getJSON("http://dictionaryapi.net/api/definition/" + text)
        //     dict.done(function(data) {
        //       console.log("success got data", data);
        //     });
        //     this.chats.push({text: "the definition is" + dict.definitions }),
        //     this.newChat = ''
        //     break;
        default:
            this.chats.push({text: "sorry I didn't understand. try @help"}),
            this.newChat = ''
          } //closes switch
        } // close sendChat
  } //closes methods section

}); //closes Vue
