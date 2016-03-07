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
    sendChat: function(){
      var text = this.newChat.trim()
      if (text) {
        this.chats.push({text: text}),
        this.newChat = ''
      } //closes if
    } //closes sendChat
  } //closes methods section

});
