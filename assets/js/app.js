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
            this.chats.push({text: "a gif"}),
            this.newChat = ''
            break;
        default:
            this.chats.push({text: "sorry I didn't understand. try @help"}),
            this.newChat = ''
          } //closes switch
        } // close sendChat
  } //closes methods section

}); //closes Vue
