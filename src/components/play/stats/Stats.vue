<template>
  <div class="card">
    <div class="card-body pb-0">
      <table class="table table-sm">

        <thead class="thead-dark">
          <tr>
            <!-- Player Name -->
            <th scope="col">{{  }}QuizlyBear</th>
            <th scope="col">Stats</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Ranking</th>
            <!-- Player's Ranking -->
            <td>{{  }}3</td>
          </tr>
          <tr scope="row">
            <th>Points</th>
            <!-- Player's Points -->
            <td>{{  }}30</td>
          </tr>
        </tbody>

      </table>
    </div>

    <div class="card-footer text-muted">

      <!-- 'Change Player Name' Modal -->
      <Modal/>

    </div>
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  components: {
    Modal
  }
}
</script>

<style scoped>

</style>