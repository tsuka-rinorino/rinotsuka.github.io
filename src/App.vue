<template>
  <div id="app" class="app">
    <v-hero/>
  </div>
</template>

<script>
export default {
  components: {
    'v-hero': require('@/components/hero/index').default,
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/app";

.app {
  height: 100%;
}
</style>
