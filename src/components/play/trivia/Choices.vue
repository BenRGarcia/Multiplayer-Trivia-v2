<template>
    <button 
      v-html="choice"
      :class="choiceClasses"
      @click.prevent="chooseAnswer"
    >
    </button>
</template>

<script>
export default {
  props: ["choice"],
  data() {
    return {
      // CSS classes for each answer choice
      choiceClasses: [
        "btn", "btn-secondary", 
        "btn-lg", "btn-block"
      ]
    }
  },
  methods: {
    chooseAnswer() {
      // Ignore choices without playerKey
      return localStorage.getItem('playerKey')
        ? this.$store.dispatch('chooseAnswer', this.choice)
        : this.choice;
    }
  }
}
</script>

<style scoped>

</style>