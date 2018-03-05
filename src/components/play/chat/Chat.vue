<template>
  <div class="card p-2">
    <div id="chat" class="card-body border border-secondary rounded">

      <!-- Chat History loads from db to here -->
      <ChatHistory 
        v-for="(chat, index) in chats" 
        :key="index"
        :name="chat.name"
        :message="chat.message"
      />

    </div>
    <div class="card-footer">
      
      <!-- User sends new chat msg here -->
      <ChatInput/>

    </div>
  </div>
</template>

<script>
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

export default {
  components: {
    ChatHistory,
    ChatInput
  },
  // Lifecycle hooks, scroll chat to bottom
  mounted: function() {
    $('#chat').scrollTop( 1000 );
  },
  updated: function () {
    $('#chat').scrollTop( 1000 );
  },
  computed: {
    chats() {
      return this.$store.getters.getChatHistory;
    }
  }
}
</script>

<style scoped>
.card-body {
  height: 200px;
  overflow: scroll;
  padding-bottom: 0;
}
.card-footer {
  padding: 0.5rem 0 0 0;
}
div {
  text-align: left;
}
hr {
  margin: 0;
}
</style>