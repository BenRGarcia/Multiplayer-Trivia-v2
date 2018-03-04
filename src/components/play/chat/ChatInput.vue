<template>
  <form @submit.prevent="">
    <div class="input-group">

      <input 
        placeholder="(kindly) taunt opponents here" 
        type="text" 
        class="form-control"
      >

      <div class="input-group-append">

        <button 
          @click.prevent=""
          class="btn btn-outline-secondary" 
          type="button"
        >
          Send
        </button>

      </div>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>