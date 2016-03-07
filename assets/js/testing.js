


    testChat: function(text){
      var text = this.newChat.trim()
      if (text === "@test"){
        this.chats.push({text: "a test:"}),
        this.newChat = ''
      } //closes if
    } //closes sendChat
