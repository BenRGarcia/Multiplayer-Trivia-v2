<template>
  <div class="row">
    <div class="col-md-6 mb-2">

      <!-- Component to Post a new trivia question -->
      <PostQuestion/>

    </div>
    <div class="col-md-6">

      <!-- Component to Set the default timer amount -->
      <SetTimer/>

    </div>
    <div id="data" :class="cardClasses">

      <!-- Component to show player data -->
      <PlayerStats/>

    </div>
    <div :class="cardClasses">

      <!-- Component to perform admin duties -->
      <DangerZone/>

    </div>
  </div>
</template>

<script>
import PostQuestion from './admin/postQuestion/PostQuestion'
import SetTimer from './admin/setTimer/SetTimer'
import PlayerStats from './admin/playerStats/PlayerStats'
import DangerZone from './admin/dangerZone/DangerZone'

export default {
  components: {
    PostQuestion,
    SetTimer,
    PlayerStats,
    DangerZone
  },
  data() {
    return {
      // CSS classes for Bootstrap Cards
      cardClasses: [
        "col-12",                   // xs + sm  sized screens
        "col-md-10", "offset-md-1", // > md sized screen
        "card", "border-danger", 
        "mt-3", "pl-0", "pr-0"
        ]
    }
  }
}
</script>

<style scoped>
#data {
  border-color: green !important;
}
</style>
