<template>
  <form @submit.prevent="sendMessage">
    <div class="input-group">

      <input 
        v-model="newMessage"
        placeholder="(kindly) taunt opponents here" 
        type="text" 
        class="form-control"
      >

      <div class="input-group-append">

        <button 
          @click.prevent="sendMessage"
          class="btn btn-outline-secondary" 
          type="button"
        >
          Send
        </button>

      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      maxChars: 100
    }
  },
  methods: {
    sendMessage() {
      // Declare local variable
      let message = this.newMessage;
      // Reset message input to empty
      this.newMessage = '';
      // Don't register messages unless playerKey is set
      if (localStorage.getItem("playerKey")) {
        return message.length <= this.maxChars
          ? this.$store.dispatch('sendMessage', message)
          : alert("Max character limit is 100 characters");
      }
      // Else player name is not yet set
      alert("You must create your player name before sending messages");
      return message;
    }
  }
}
</script>

<style scoped>

</style>