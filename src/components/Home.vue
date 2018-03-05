<template>
  <div class="row">

    <!-- 'PLAY!' Button -->
    <div class="col-12 mt-2 mb-2">
      <router-link to="/play">
        <button class="btn btn-primary">
          {{ btnText }}
        </button>
      </router-link>
    </div>

    <!-- LeaderBoard -->
    <div class="col-12 mt-3 mb-3">
      <Leaderboard/>
    </div>

    <!-- 'ADMIN' Button -->
    <div class="col-12 fixed-bottom">
      <router-link to="/admin">
        <button class="btn btn-danger">
          {{ adminText }}
        </button>
      </router-link>
    </div>

  </div>
</template>

<script>
import Leaderboard from './home/Leaderboard'
import Leader from './home/Leader'

export default {
  components: {
    Leaderboard,
    Leader
  },
  data() {
    return {
      btnText: "PLAY!",
      adminText: "Trivia Host Dashboard"
    }
  }
}
</script>

<style scoped>

</style>