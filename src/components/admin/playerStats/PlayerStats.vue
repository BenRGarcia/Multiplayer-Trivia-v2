<template>
  <div>
    <div class="card-header pt-1 pb-1">
      <h2 class="mb-0">Trivia Data</h2>
    </div>
    <div class="card-body pb-1 pt-2">
      <p class="card-text mb-1">
        Seconds Remaining: 
        
        <!-- Seconds Remaining -->
        <span>{{ seconds }}</span>

      </p>
      <p class="card-text mb-1">
        Correct Answer: 
        
        <!-- Seconds Remaining -->
        <span>{{ correctAnswer }}</span>

      </p>
      <p class="mb-1">
        <button 
          class="btn btn-outline-primary" 
          type="button" 
          data-toggle="collapse" 
          data-target="#collapseExample"
        >
          Toggle | Current players and scores
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          
          <!-- Leaderboard available while on admin page -->
          <Leaderboard/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from '../../home/Leaderboard'

export default {
  components: {
    Leaderboard
  },
  computed: {
    seconds() {
      return this.$store.getters.getSecondsRemaining;
    },
    correctAnswer() {
      return this.$store.getters.getCorrectAnswer;
    }
  }
}
</script>

<style scoped>

</style>