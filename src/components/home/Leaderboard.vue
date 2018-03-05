<template>
  <div class="row">
    <div :class="leaderboardClasses">
      <div class="card">
        <div class="card-body p-0">
          <h3 class="mt-1 mb-1">LEADERBOARD</h3>
          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Ranking</th>
                <th scope="col">Name</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>

              <!-- Each Leader in Leaderboard -->
              <Leader
                v-for="(leader, index) in leaders"
                :key="index"
                :name="leader.name"
                :points="leader.points"
                :rank="index + 1"
              />

            </tbody>
          </table>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Leader from './Leader'

export default {
  components: {
    Leader
  },
  data() {
    return {
      // Bootstrap Grid
      leaderboardClasses: [
        "col-12",                   // xs screens
        "col-sm-10", "offset-sm-1", // sm screens
        "col-md-8", "offset-md-2",  // md screens
        "col-lg-6", "offset-lg-3"   // lg screens
      ]
    }
  },
  computed: {
    leaders() {
      return this.$store.getters.getLeaders;
    }
  }
}
</script>