<template>
  <div>
    <div class="row">

      <!-- 'View Source Code' link -->
      <div class="col-12">
        <a :href="url" target="_blank">{{ linkText }}</a>
      </div>

      <!-- Page Title -->
      <div class="col-12">
        <router-link to="/home">
          <span :class="headingClasses">{{ headingText }}</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://github.com/BenRGarcia/multiplayer-trivia",
      linkText: "View Source Code",
      headingText: "TRIVIA",
      headingClasses: ["display-3", "mb-0", "title"]
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.title {
  color: black;
}
.title:hover {
  color: black;
}
</style>