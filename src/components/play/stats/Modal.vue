<template>
  <div>

    <!-- Button to trigger modal, call method to autofocus -->
    <button 
      @click="autofocusModal" 
      type="button" 
      class="btn btn-primary mb-0" 
      data-toggle="modal" 
      data-target="#playerNameModal"
    >
      Change Player Name
    </button>

    <!-- Modal -->
    <div class="modal fade" id="playerNameModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create a Player Name to play</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <!-- Begin modal form -->
            <form 
              v-on:submit.prevent=""
            >

              <div class="form-group">
                <label for="player-name" class="col-form-label">Player Name:</label>
                
                <!-- Input box for player name -->
                <input 
                  type="text" 
                  class="form-control" 
                  id="player-name" 
                  placeholder="ex. QuizlyBear88"
                >

              </div>
            </form>
          </div>
          <div class="modal-footer">

            <!-- Submit button -->
            <input 
              @click.prevent="" 
              type="submit" 
              class="btn btn-primary"
            >

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Focus modal to input, save the user a 'click'
    autofocusModal() {
      $('#playerNameModal').on('shown.bs.modal', () => {
        $('#player-name').trigger('focus');
      })
    }
  }
}
</script>

<style scoped>

</style>