<template>
    <p><span class="name">{{ name }}</span>: {{ message }}</p>
</template>

<script>
export default {
  props: [
    "name", "message"
  ]
}
</script>

<style scoped>
p {
  border-top: 1px solid #000;
}
.name {
  color: red;
}
</style>