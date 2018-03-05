<template>
    <button 
      v-html="choice"
      :class="choiceClasses"
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
  }
}
</script>

<style scoped>

</style>