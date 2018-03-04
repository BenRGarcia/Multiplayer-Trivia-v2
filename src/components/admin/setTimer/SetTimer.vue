<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-1">Set Timer Amount</h5>

      <h6>Currently: <span id="seconds">??? {{  }} </span> seconds)</h6>

      <p class="card-text">Type in how many seconds you want players to have for each question.</p>
      <form @submit.prevent="">
        <div class="form-group row">
          <label class="text-right col-6 mb-0 pt-2">Seconds:</label>

          <input 
            type="number" 
            class="form-control col-4 col-sm-5 col-lg-4" 
            placeholder="(max = 60)"
          >
        
        </div>
      </form>
      <button @click="" class="btn btn-primary">Set Timer Seconds</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#seconds {
  color: red;
}
</style>