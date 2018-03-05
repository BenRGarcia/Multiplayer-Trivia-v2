<template>
  <div class="card text-center">
    <div class="card-header">

        <!-- Timer -->
        <Timer/>

    </div>
    <div id="question" class="card-body">
      <div :class="questionClasses">
          
        <div v-if="question">
          <!-- Trivia Question -->
          <Question
            :question="question"
          />
        </div>
          
      </div>
      <div :class="choicesClasses">

        <!-- Prevent page error if not yet loaded from firebase -->
        <div v-if="choices">
          
          <!-- Hide choices when time is up -->
          <div v-if="isTimeUp">

            <!-- Answer Choices -->
            <Choices
              v-for="(choice, index) in choices"
              :key="index"
              :choice="choice"
            />
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Timer from '../timer/Timer'
import Question from './Question'
import Choices from './Choices'

export default {
  data() {
    return {
      // CSS classes for trivia question
      questionClasses: [
        "card-title",
        "col-12", 
        "col-md-10", "offset-md-1"
      ],
      // CSS classes for section of answer choices
      choicesClasses: [
        "card-text", 
        "col-12",                   // for xs screens
        "col-sm-10", "offset-sm-1", // for sm screens
        "col-md-6", "offset-md-3",  // for md screens
        "col-lg-4", "offset-lg-4",  // for lg screens
      ]
    }
  },
  components: {
    Timer,
    Question,
    Choices
  },
  computed: {
    question() {
      return this.$store.getters.getQuestion
        ? this.$store.getters.getQuestion
        : false;
    },
    choices() {
      return this.$store.getters.getChoices
        ? this.$store.getters.getChoices
        : false;
    },
    isTimeUp() {
      return this.$store.getters.getSecondsRemaining <= 0
        ? false
        : true
    }
  }
}
</script>

<style scoped>
#question {
  min-height: 318px;
}
.card-header {
  min-height: 53px;
}
</style>