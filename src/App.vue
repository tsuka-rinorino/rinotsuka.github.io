<template>
  <div id="app" class="app">
    <v-hero/>
    <v-profile/>
    <v-work/>
    <v-post/>
  </div>
</template>



<script>
</script>



<style lang="scss">
@import "@/assets/scss/app";

.app {
  height: 100%;

  .hero,
  .profile,
  .work,
  .post {
    margin-top: 9rem;
    margin-bottom: 9rem;
  }
}
</style>
