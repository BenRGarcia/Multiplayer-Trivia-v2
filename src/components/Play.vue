<template>
    <div>
      <div class="row">
        <div class="col">

          <!-- Bootstrap Card that contains Timer + Question + Answer Choices -->
          <Trivia/>

        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5 mb-3">

          <!-- Stats -->
          <Stats/>

        </div>
        <div class="col-12 col-md-7 mb-3">

          <!-- Chat -->
          <Chat/>

        </div>
      </div>
    </div>
</template>

<script>
import Trivia from './play/trivia/Trivia'
import Stats from './play/stats/Stats'
import Chat from './play/chat/Chat'

export default {
  components: {
    Trivia,
    Stats,
    Chat
  }
}
</script>

<style scoped>

</style>