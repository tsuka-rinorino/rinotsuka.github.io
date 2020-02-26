<template>
  <div id="app" class="app">
    <v-hero/>
    <v-profile/>
    <v-post/>
    <v-work/>
    <v-footer/>
  </div>
</template>



<script>
</script>



<style lang="scss">
@import "@/assets/scss/app";

.app {
  height: 100%;

  .hero {
    margin-bottom: 6rem;
  }
  .work {
    margin-top: 6rem;
  }
  .profile,
  .post {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
}
</style>
