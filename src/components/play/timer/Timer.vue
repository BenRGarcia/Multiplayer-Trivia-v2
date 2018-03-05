<template>
  <h4 class="mb-0">
    Time Remaining: {{ seconds }}
  </h4>
</template>

<script>
export default {
  computed: {
    seconds() {
      return this.$store.getters.getSecondsRemaining;
    }
  }
}
</script>

<style scoped>

</style>