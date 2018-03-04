<template>
  <div id="app" class="container">

    <!-- Page Title -->
    <div class="row">
      <div class="col">
        <PageTitle/>
      </div>
    </div>

    <!-- Page Title -->
    <div class="row">
      <div class="col">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import PageTitle from './components/PageTitle'

export default {
  name: 'App',
  components: {
    PageTitle
  }
}
</script>
