<template>
    <a 
      v-html="choice"
      :class="choiceClasses"
      @click.prevent="chooseAnswer"
      tabindex="0"
      role="button"
      data-toggle="popover"
      data-trigger="focus"
      title="Chosen!"
      data-template='<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3></div>'
    >
    </a>
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
      return this.$store.getters.isKeyInDb
        ? this.$store.dispatch('chooseAnswer', this.choice)
        : alert("Must set player name before playing!");
    }
  }
}
</script>

<style scoped>
a {
  color: white !important;
}
</style>