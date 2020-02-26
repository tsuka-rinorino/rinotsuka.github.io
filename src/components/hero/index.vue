<template>
  <div class="hero">
    <v-wrap>
      <img class="hero__logo" src="/img/common/logo.jpg" alt="">
    </v-wrap>
  </div>
</template>



<script>
</script>



<style lang="scss">
.hero {

  &__logo {
    display: block;
    position: absolute;
    top: -56px;
    right: -128px;
    width: 784px;
    height: 784px;
  }

  .wrap {
    height: #{784px - 56px};
  }
}
</style>
