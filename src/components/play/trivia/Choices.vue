<template>
  <div>
    <button :class="choiceClasses">
      {{  }}Cat
    </button>
    <button :class="choiceClasses">
      {{  }}Bird
    </button>
    <button :class="choiceClasses">
      {{  }}Elephant
    </button>
    <button :class="choiceClasses">
      {{  }}Dog
    </button>
  </div>  
</template>

<script>
export default {
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