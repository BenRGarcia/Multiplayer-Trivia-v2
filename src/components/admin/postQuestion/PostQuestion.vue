<template>
  <div class="card">
    <div class="card-body">

      <h5 class="card-title">Post Question</h5>
      <p class="card-text mb-1">Click the button below to post the next trivia question.</p> 
      <p class="card-text">(This will also start the timer automatically)</p>

      <form @submit.prevent="postQuestion">
        <div class="form-group row">
          <label class="col-12 mb-0 pt-1 pr-1">Question Number:</label>
          <div class="input-group mt-1 col-8 offset-2 col-md-6 offset-md-3">
            <div class="input-group-prepend">
              <span class="input-group-text p-0">

                <!-- Decrement Question Number -->
                <button 
                  @click.prevent="decrementCounter" 
                  class="btn btn-secondary"
                >
                  -
                </button>

              </span>
            </div>

            <!-- v-model to display question number -->
            <input v-model="index" value="1" type="number" class="text-center form-control" readonly>
            <div class="input-group-append">
              <span class="input-group-text p-0">

                <!-- Increment Question Number -->
                <button 
                  @click.prevent="incrementCounter" 
                  class="btn btn-secondary"
                >
                  +
                </button>

              </span>
            </div>
          </div>
        </div>
      </form>

      <!-- Post Question -->
      <button 
        @click.prevent="postQuestion" 
        class="btn btn-primary"
      >
        Post Next Question
      </button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1
    }
  },
  methods: {
    postQuestion() {
      return this.$store.dispatch('postQuestion', this.index - 1)
    },
    incrementCounter() {
      let questionCount = this.$store.getters.getQuestionCount;
      if (this.index >= questionCount) {
        return this.index = 1;
      }
      return this.index++;
    },
    decrementCounter() {
      let questionCount = this.$store.getters.getQuestionCount;
      if (this.index <= 1) {
        return this.index = questionCount;
      }
      return this.index--;
    }
  }
}
</script>

<style scoped>

</style>