<template>
  <tr>
    <th scope="row">{{ rank }}</th>
    <td>{{ name }}</td>
    <td>{{ points }}</td>
  </tr>
</template>

<script>
export default {
  props: [
    "name", "points", "rank"
  ]
}
</script>

<style scoped>

</style>